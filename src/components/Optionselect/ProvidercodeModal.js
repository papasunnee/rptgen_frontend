import { fetcher } from "@/context/AuthContext";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useSWR from "swr";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

const initialValues = {
    firstname: "",
    lastname: "",
    middlename: "",
    street_address: "",
    city_state_zip: "",
    home_phone: "",
    providers_code: "",
    assistant_providers_code: "",
    image_url: "",
    birth_date: "",
    chart_number: "",
    ssn: "",
    gender: "",
    marital_status: "",
};

export default function ProvidercodeModal(props) {
    const { mutate } = useSWR("/api/patient", fetcher);
    const [patientData, setPatientData] = useState(initialValues);
    const [success, setSuccess] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();

    const handleChange = (e) => {
        setSuccess(false);
        const name = e.target.name;
        const value = e.target.value;
        setPatientData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleOnChange = (changeEvent) => {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        };

        reader.readAsDataURL(changeEvent.target.files[0]);
    };
    const handleSubmit = async (e) => {
        setProcessing(true);
        e.preventDefault();

        const formElement = e.currentTarget;
        const fileInput = Array.from(formElement.elements).find(
            ({ name }) => name === "image_url"
        );

        const formData = new FormData();

        for (const file of fileInput.files) {
            formData.append("file", file);
        }

        let cloud_image;

        formData.append("upload_preset", "rptgen");

        console.log(fileInput.files.length > 1);

        if (fileInput.files.length > 0) {
            cloud_image = await fetch(
                "https://api.cloudinary.com/v1_1/altitude-tech-com/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            ).then((r) => r.json());
            setImageSrc(cloud_image?.secure_url);
            setUploadData(cloud_image);
        }

        console.log({ cloud_image });

        try {
            const response = await fetch("/api/patient", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...patientData,
                    image_url:
                        cloud_image?.secure_url ??
                        "https://res.cloudinary.com/altitude-tech-com/image/upload/v1654090662/rptgen/default.png",
                }),
            });
            const data = await response.json();
            if (data.success) {
                mutate();
                setSuccess(true);
                setPatientData(initialValues);
            }
        } catch (error) {
            console.log({ error: error.message });
        }
        setProcessing(false);
    };
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`${functionalStyles.Modal}`}
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className={`${functionalStyles.Modal_title}`}
                >
                    <strong>Enter Provider Code</strong>
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body className={`${functionalStyles.Modal_body}`}>
                    <div className={`${functionalStyles.Adl_col}`}>
                        <div className={`${functionalStyles.Adl_col_title}`}>
                            <h3 style={{ fontSize: "18px", paddingBottom: "15px" }}>
                                For existing patients, enter provider code and click
                                button to load patients.
                            </h3>
                        </div>
                        <div className={`${functionalStyles.Inputlist}`}>

                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Provider Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter Provider Code"
                                    required
                                    name="providers_code"
                                    value={patientData.providers_code}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Provider Key</label>
                                <input
                                    type="text"
                                    placeholder="Enter Asst Provider Code"
                                    name="assistant_providers_code"
                                    value={patientData.assistant_providers_code}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
                    <p>{success && <span>Patient Successfully Added</span>}</p>
                    <button type="submit" disabled={processing}>
                        {processing ? "Please Wait..." : "Continue"}
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}
