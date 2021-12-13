import React, {useState} from 'react';
import { Formik, useFormik } from 'formik';
import Addreward from '../components/Addreward/Addreward'
import api from '../components/api/api';
import axios from 'axios';
import "./Pagelayout.css";

function RewardV2(props) {

    const [firstImage, setFirst ] = useState("");
    const [secImage, setSecond ] = useState("");
    const [thirdImage, setThird ] = useState("");


    const uploadImage = async(value) => {
        const data = new FormData()
        data.append("file", value)
        data.append("upload_preset", "saftyReport64")
        data.append("cloud_name","dikzhc5yg")

        return await fetch("https://api.cloudinary.com/v1_1/dikzhc5yg/image/upload",{
        method:"post",
            body: data
            })
        .catch(err => console.log(err))
    }

    const uploadForm = async(data, url) => {
        return await axios.post(`${api}/api/reward/create-reward`, {
            firstUrl: url[0],
            firstName: data.firstName,
            firstStock: data.firstStock,

            secondurl: url[1],
            secondName: data.secondName,
            secondStock: data.secondStock,

            thirdurl: url[2],
            thirdName: data.thirdName,
            thirdStock: data.thirdStock,
        })
    }

    const handleSubmit = async (data) => {


        const firstUri = await uploadImage(firstImage)
        let getFirstUrl = await firstUri.json();

        const secUri = await uploadImage(secImage)
        let getSecondUrl = await secUri.json();

        const thirdUri = await uploadImage(thirdImage)
        let getThirdUrl = await thirdUri.json();

        const allUrl = [getFirstUrl.url, getSecondUrl.url, getThirdUrl.url];

        const resp = await uploadForm(data, allUrl);

        console.log(resp);
    }

    const formik = useFormik({
        initialValues:{
            firstName:'',
            firstStock:'',

            secondName:'',
            secondStock:'',

            thirdName:'',
            thirdStock:'',
        },
        onSubmit: Values => {
            handleSubmit(Values);
        }
    })

    return (
        <div>
            <h1 className="page-header">
                Reward
            </h1>
            <div className="row">
            <form className="addProductForm" onSubmit={formik.handleSubmit}>
                {/*First Reward*/}
                <div className="col-4">
                    <div className="card"  >
                        <div className="newProduct">
                            <h1 className="addProductTitle">Add First Reward</h1>
            
                                <div className="addProductItem">
                                    <label>Select File:</label>
                                    <input type="file" onChange= {(e)=> setFirst(e.target.files[0])} /> 
                                </div>
                                <div className="addProductItem">
                                    <label>Name</label>
                                    <input id='firstName' name='firstName' type="text" placeholder="Reward Name" value={formik.values.firstName} onChange={formik.handleChange} required />
                                </div>
                                <div className="addProductItem">
                                    <label>Stock</label>
                                    <input id='firstStock' name='firstStock' type="text" placeholder="Quantity" value={formik.values.firstStock} onChange={formik.handleChange} required />
                                </div>
                        </div>
                    </div>
                </div>

                {/*Second Reward*/}
                <div className="col-4">
                    <div className="card"  >
                        <div className="newProduct">
                            <h1 className="addProductTitle">Add Second Reward</h1>
                                <div className="addProductItem">
                                    <label>Select File:</label>
                                    <input type="file" onChange= {(e)=> setSecond(e.target.files[0])} /> 
                                </div>
                                <div className="addProductItem">
                                    <label>Name</label>
                                    <input id='secondName' name='secondName' type="text" placeholder="Reward Name" value={formik.values.secondName} onChange={formik.handleChange} required />
                                </div>
                                <div className="addProductItem">
                                    <label>Stock</label>
                                    <input id='secondStock' name='secondStock' type="text" placeholder="Quantity" value={formik.values.secondStock} onChange={formik.handleChange} required />
                                </div>
                        </div>
                    </div>
                </div>

                    {/*Third Reward*/}
                    <div className="col-4">
                    <div className="card"  >
                        <div className="newProduct">
                            <h1 className="addProductTitle">Add Third Reward</h1>
                                <div className="addProductItem">
                                    <label>Select File:</label>
                                    <input type="file" onChange= {(e)=> setThird(e.target.files[0])} /> 
                                </div>
                                <div className="addProductItem">
                                    <label>Name</label>
                                    <input id='thirdName' name='thirdName' type="text" placeholder="Reward Name" value={formik.values.thirdName} onChange={formik.handleChange} required />
                                </div>
                                <div className="addProductItem">
                                    <label>Stock</label>
                                    <input id='thirdStock' name='thirdStock' type="text" placeholder="Quantity" value={formik.values.thirdStock} onChange={formik.handleChange} required />
                                </div>
                        </div>
                    </div>
                </div>

                <div className="reward">
                    <button className="button-status4" type="submit">Create</button>
                </div>
       
                </form>
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">

                            <Addreward />

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RewardV2;