import "./newform.scss";
import noAvatar from "../../assets/noimage.png";
import cooseFile from "../../assets/imageChoose.png";
import { useState } from "react";

function NewItem({ dataSource, title }) {
  const [imageFile, setimageFile] = useState("");
  const chooseImageHandler = function (params) {
    setimageFile(params);
  };
  const mode = "dark";
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
          <form>
            <div className="inputItem file">
              <label htmlFor="file">
                <span>Image</span>
                <img src={cooseFile} alt="file" />
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
                  type={data.type}
                  placeholder={data.placeholder}
                  {...data}
                  className={mode}
                />
              </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
