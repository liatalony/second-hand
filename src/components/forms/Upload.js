// import axios from "axios";
import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import UploadImage from "../../assets/icons/image-upload.svg";
// import FormData from "form-data";
import "./forms.scss";

const AddItemForm = () => {

	const [formFields, setFormFields] = useState(false);

	const [selectedFile, setSelectedFile] = useState({inputId: "", inputFile: false})
	const [preview1, setPreview1] = useState()
	const [preview2, setPreview2] = useState()
	const [preview3, setPreview3] = useState()

	const [itemName, setItemName] = useState("")
	const [itemDesc, setItemDesc] = useState("")
	const [itemCondition, setItemCondition] = useState("")
	const [itemCategory, setItemCategory] = useState("")
	const [itemSubCategory, setItemSubCategory] = useState("")
	const [itemSubSubCategory, setItemSubSubCategory] = useState("")
	const [itemSize, setItemSize] = useState("")
	const [itemColour, setItemColour] = useState("")
	const [itemPrice, setItemPrice] = useState("")
	const [itemImage1, setItemImage1] = useState(false)
	const [itemImage2, setItemImage2] = useState(false)
	const [itemImage3, setItemImage3] = useState(false)

	useEffect(()=>{
		try {
			axios.get(
				"/products/add",
			).then((res)=>{
				setFormFields(res.data);
			}
			)
		} catch (error) {
			console.log(error.message);
		}	},[])

	useEffect(()=>{
		console.log(formFields);
	}, [formFields])


	useEffect(() => {
		if (!selectedFile.inputFile) {
			if (selectedFile.inputId === "image1") {
				setPreview1(undefined)   
				setItemImage1(false)             
			} else if (selectedFile.inputId === "image2") {
				setPreview2(undefined)                
				setItemImage2(false)             
			} else if (selectedFile.inputId === "image3") {
				setPreview3(undefined)                
				setItemImage2(false)             
			}
			return
		}
        
		const objectUrl = URL.createObjectURL(selectedFile.inputFile)
		if (selectedFile.inputId === "image1") {
			setPreview1(objectUrl)                
			setItemImage1(selectedFile.inputFile)             
		} else if (selectedFile.inputId === "image2") {
			setPreview2(objectUrl)                
			setItemImage2(selectedFile.inputFile)             
		} else if (selectedFile.inputId === "image3") {
			setPreview3(objectUrl)                
			setItemImage3(selectedFile.inputFile)             
		}

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const handleSubmit = async(event) => {
		event.preventDefault();
		const data = new FormData();
		data.append("item_name", itemName)
		data.append("item_desc", itemDesc)
		data.append("item_gender", itemCategory)
		data.append("item_category", itemSubCategory)
		data.append("item_sub_category", itemSubSubCategory)
		data.append("item_size", itemSize)
		data.append("item_colour", itemColour)
		data.append("item_condition", itemCondition)
		data.append("item_price", itemPrice)
		data.append("item_image", itemImage1)
		data.append("item_image", itemImage2)
		data.append("item_image", itemImage3)

		console.log(data);
		try {
			const response = await axios.post(
				"/products/add",
				data, {}
			)
			console.log(response.data);
		} catch (error) {
			console.log(error.response);
		}
	}

	const onSelectFile = (e) => {
		console.log("in select file func");
		console.log(e.target.files);
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}

		// I've kept this example simple by using the first image instead of multiple
		setSelectedFile({inputId: e.target.id, inputFile: e.target.files[0]})
	}

	return(
		<>
			{!formFields ? <h1>Loading...!</h1> : (

				<form onSubmit={handleSubmit}>
					<h1>Add Item</h1>
					<div className="field">
						<label htmlFor={"item_name"}>Item Name</label>
						<input id="item_name" name="item_name" type={"text"} required autoComplete="off" value={itemName} onChange={(e)=> setItemName(e.target.value)}></input>
					</div>
					<div className="field">
						<label htmlFor={"item_desc"}>Item Description</label>
						<textarea id="item_desc" name="item_desc" required autoComplete="off" value={itemDesc} onChange={(e)=> setItemDesc(e.target.value)}></textarea>
					</div>
					<div className="field">
						<label htmlFor={"item_condition"}>Condition</label>
						<select id="item_condition" name="item_condition" required autoComplete="off" value={itemCondition} onChange={(e)=> setItemCondition(e.target.value)}>
							<option value={""}>----</option>
							{formFields.conditions.map(condition=> {
								return <option key={condition.quality_id} value={condition.quality_name}>{condition.quality_name}</option>
							})}
						</select>
					</div>
					<div className="field">
						<label htmlFor={"item_gender"}>Category</label>
						<select id="item_gender" name="item_gender" required autoComplete="off" value={itemCategory} onChange={(e)=> setItemCategory(e.target.value)}>
							<option value={""}>----</option>
							{formFields.genders.map(gender => {
								return <option key={gender.gender_id} value={gender.gender_id}>{gender.gender_name}</option>
							})}
						</select>
					</div>
					<div className="field">
						<label htmlFor={"item_category"}>Sub Category</label>
						<select id="item_category" name="item_category" required autoComplete="off" value={itemSubCategory} onChange={(e)=> setItemSubCategory(e.target.value)}>
							<option value={""}>----</option>
							{formFields.categories.map(category => {
								return <option key={category.type_id} value={category.type_name}>{category.type_name}</option>
							})}
						</select>
					</div>
					<div className="field">
						<label htmlFor={"item_subcategory"}>Sub Sub Category</label>
						<select id="item_subategory" name="item_subcategory" required autoComplete="off" value={itemSubSubCategory} onChange={(e)=> setItemSubSubCategory(e.target.value)}>
							<option value={""}>----</option>
							{formFields.subCategories.map(category => {
								return <option key={category.category_id} value={category.category_name}>{category.category_name}</option>
							})}
						</select>
					</div>
					<div className="field">
						<label htmlFor={"item_size"}>Sub Category</label>
						<select id="item_size" name="item_size" required autoComplete="off" value={itemSize} onChange={(e)=> {setItemSize(e.target.value)}}>
							<option value={""}>----</option>
							{formFields.sizes.map(sizeInt => {
								return <option key={"Int" + sizeInt.size_id} value={sizeInt.size_id+" "+sizeInt.size_international}>{sizeInt.size_international} (EU {sizeInt.size_eu})</option>
							})}
							{formFields.sizes.map(sizeEU => {
								return <option key={"EU" + sizeEU.size_id} value={sizeEU.size_id+" "+sizeEU.size_eu}>EU {sizeEU.size_eu}</option>
							})}
							{formFields.sizes.map(sizeUS => {
								return <option key={"US" + sizeUS.size_id} value={sizeUS.size_id+" "+sizeUS.size_us}>US {sizeUS.size_us}</option>
							})}
							{formFields.sizes.map(sizeUK => {
								return <option key={"UK" + sizeUK.size_id} value={sizeUK.size_id+" "+sizeUK.size_uk}>UK {sizeUK.size_uk}</option>
							})}
						</select>
					</div>
					<div className="field">
						<label htmlFor={"item_color"}>Colour</label>
						<select id="item_color" name="item_color" required autoComplete="off" value={itemColour} onChange={(e)=> setItemColour(e.target.value)}>
							<option value={""}>----</option>
							{formFields.colours.map(colour=>{
								return <option key={colour.colour_id} value={colour.colour_name}>{colour.colour_name}</option>
							})}
						</select>
					</div>
					<div className="field">
						<label htmlFor={"item_price"}>Price (in Danish crown)</label>
						<input id="item_price" name="item_price" type={"number"} required autoComplete="off" value={itemPrice} onChange={(e)=> setItemPrice(e.target.value)}></input>
					</div>
					<div className="image-uploads">
						<div className="field">
							<label htmlFor="image1">
								<div className="uploaded-image" style={{backgroundImage: `url(${preview1 ? preview1 : UploadImage})`}}></div>
							</label>
							<input id="image1" name="image1" type={"file"} required onChange={onSelectFile}></input>
						</div>
						<div className="field">
							<label htmlFor="image2">
								<div className="uploaded-image" style={{backgroundImage: `url(${preview2 ? preview2 : UploadImage})`}}></div>
							</label>
							<input id="image2" name="image2" type={"file"} required onChange={onSelectFile}></input>
						</div>
						<div className="field">
							<label htmlFor="image3">
								<div className="uploaded-image" style={{backgroundImage: `url(${preview3 ? preview3 : UploadImage})`}}></div>
							</label>
							<input id="image3" name="image3" type={"file"} required onChange={onSelectFile}></input>
						</div>
					</div>
					<div className="field">
						<button type={"submit"} className={"btn btn--primary"}>Sumbit</button>
					</div>
				</form>
			)}
		</>
	)
}

export default AddItemForm;