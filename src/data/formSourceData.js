export const userSource = [
	{
		type: "text",
		required: true,
		label: "Username",
		id: "username",
		placeholder: "john_doe"
	},
	{
		type: "text",
		required: true,
		label: "Phone",
		id: "phone",
		placeholder: "+237 686 967 978"
	},
	{
		type: "text",
		required: true,
		label: "Address",
		id: "address",
		placeholder: "Douala pk17"
	},
	{
		type: "email",
		required: true,
		label: "Email",
		id: "email",
		placeholder: "john_doe@gmail.com"
	},
	{
		type: "text",
		required: true,
		label: "Name and Surname",
		id: "nameandsurname",
		placeholder: "Joh Doe"
	},
	{
		type: "text",
		required: true,
		label: "Country",
		id: "country",
		placeholder: "Cameroun"
	},
	{
		type: "password",
		required: true,
		label: "Password",
		id: "password",
		placeholder: ""
	}
]


export const productsSource = [
	{
		type: "text",
		required: true,
		label: "Title",
		id: "title",
		placeholder: "Appel SM Pro"
	},
	{
		type: "number",
		required: true,
		label: "Price",
		id: "price",
		placeholder: "230",
		min: 1, max: 10000, step: 5

	},
	{
		type: "text",
		required: true,
		label: "Society",
		id: "society",
		placeholder: "Cameroun"
	},
	{
		type: "number",
		required: true,
		label: "Qauntity",
		id: "qauntity",
		placeholder: "2"
	}
]