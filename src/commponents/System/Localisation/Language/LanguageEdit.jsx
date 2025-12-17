// LanguageEdit.jsx
import React, { useState } from "react";
import FormInput from "./FormInput";
import FormToggle from "./FormToggle";
import FormSection from "./FormSection";
import Breadcrumb from "../../../Breadcrumb";
const LanguageEdit = () => {
    const [form, setForm] = useState({
        languageName: "English (Default)",
        code: "en-gb",
        locale: "en_US.UTF-8,en_US,en-gb,english",
        directory: "english",
        filename: "english",
        sortOrder: 1,
        status: true,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <Breadcrumb
                title="Language"
                paths={[
                    { name: "Home" },
                    { name: "Language", color: "text-blue-400" },
                ]}
            />
            <FormSection title="Edit Language">

                <FormInput
                    label="Language Name"
                    name="languageName"
                    required
                    value={form.languageName}
                    onChange={handleChange}
                />

                <FormInput
                    label="Code"
                    name="code"
                    required
                    value={form.code}
                    onChange={handleChange}
                    note="ISO code for the language (e.g., en-gb, fr-fr)."
                />

                <FormInput
                    label="Locale"
                    name="locale"
                    value={form.locale}
                    onChange={handleChange}
                    note="Example format: en_US.UTF-8,en_US,en-gb,english"
                />

                <FormInput
                    label="Directory"
                    name="directory"
                    value={form.directory}
                    onChange={handleChange}
                    note="Folder name under /languages directory."
                />

                <FormInput
                    label="Filename"
                    name="filename"
                    value={form.filename}
                    onChange={handleChange}
                    note="Main language file name (without extension)."
                />

                <FormInput
                    label="Sort Order"
                    name="sortOrder"
                    type="number"
                    value={form.sortOrder}
                    onChange={handleChange}
                />

                <FormToggle
                    label="Status"
                    checked={form.status}
                    onChange={() => setForm({ ...form, status: !form.status })}
                />

            </FormSection>
        </div >
    );
};

export default LanguageEdit;
