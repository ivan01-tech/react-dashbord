import "./newform.scss";
import noAvatar from "../../assets/noimage.png";
import cooseFile from "../../assets/imageChoose.png";
import { useEffect, useState } from "react";
import { useThemeContextProvider } from "../../context/ThemeContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRef } from "react";
import {
  fireStore,
  firebaseAuth,
  firebaseStorage,
} from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function NewItem({ dataSource, title }) {
  const navigate = useNavigate();
  const { themeMode } = useThemeContextProvider();
  const { seterrMsg, setError, error, errMsg } = useAuthContext();
  const mode = themeMode.isDarkMode ? "dark" : "";

  const inputRef = useRef([]);

  const [imageFile, setimageFile] = useState("");
  const [percent, setPercent] = useState(null);
  const [imageURL, setimageURL] = useState(null);
  // const [error, seterror] = useState("");

  const chooseImageHandler = function (params) {
    setimageFile(params);
  };

  const addInputRef = function (params) {
    if (!params) return;
    if (!inputRef.current.includes(params)) {
      inputRef.current.push(params);
      return;
    }
  };

  const submitHandler = async function (e) {
    e.preventDefault();
    const areFilled = inputRef?.current?.every((elt) => Boolean(elt.value));
    console.log(areFilled);
    if (!areFilled) {
      return;
    }
    const newData = { image: imageURL };
    inputRef?.current?.forEach((elt) => {
      newData[elt.id] = elt.value;
    });

    try {
      const credentials = await createUserWithEmailAndPassword(
        firebaseAuth,
        newData.email,
        newData.password
      );
      const userRef = doc(fireStore, "users", credentials.user.uid);
      await setDoc(userRef, newData);

      console.log(newData);
      console.log(credentials);

      setError(false);
      seterrMsg("");
      navigate("/users");
    } catch (err) {
      setError(true);
      seterrMsg(err.message);
      console.log(err);
    }
  };

  // to handle uploading file , as soon as the user choose it
  useEffect(() => {
    if (!imageFile) return;
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(firebaseStorage, "images/" + imageFile.name);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    // Listen for state changes, errors, and completion of the upload.
    const unsub = uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          setimageURL(downloadURL);
        });
      }
    );

    return unsub;
  }, [imageFile]);

  console.log(inputRef.current);

  return (
    <div className="new">
      <div className="head">
        <h1>{title}</h1>
      </div>
      <div className="content">
        <div className="left">
          <img
            src={imageFile ? URL.createObjectURL(imageFile) : noAvatar}
            alt="avatar"
          />
        </div>
        <div className="right">
          {error && <div className="error">{errMsg}</div>}
          <form onSubmit={submitHandler}>
            <div className="inputItem file">
              <label htmlFor="file">
                <span>Image</span>
                <img src={cooseFile} alt="file" />
                <p>{percent ? `${percent}% uploaded` : ""}</p>
              </label>
              <input
                type="file"
                onChange={(e) => chooseImageHandler(e.currentTarget.files[0])}
                id="file"
                style={{ display: "none" }}
              />
            </div>
            {dataSource.map((data) => (
              <div className="inputItem" key={data.id}>
                <label htmlFor={data.id}>{data.label}</label>
                <input
                  id={data.id}
                  name={data.id}
                  type={data.type}
                  placeholder={data.placeholder}
                  className={mode}
                  ref={addInputRef}
                  required={data?.required}
                  {...data}
                />
              </div>
            ))}
            <button disabled={percent && percent < 100}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
