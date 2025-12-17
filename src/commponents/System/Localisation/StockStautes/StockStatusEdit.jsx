// pages/StockStatusEdit.jsx
import React, { useState } from "react";
import FormSection from "../Language/FormSection";
import FormInputWithFlag from "./FormInputWithFlag";
import Breadcrumb from "../../../Breadcrumb";

export default function StockStatusEdit() {
    const [form, setForm] = useState({
        stockStatusName: "2-3 Days",
    });

    return (
        <div className="pl-3 bg-[#F6F6F6]">
            <Breadcrumb
                title="Currency"
                paths={[
                    { name: "Home" },
                    { name: "Language", color: "text-blue-400" },
                ]}
            />
            <FormSection title="Edit Stock Status">
                <FormInputWithFlag
                    label="Stock Status Name"
                    required
                    value={form.stockStatusName}
                    onChange={(e) =>
                        setForm({ ...form, stockStatusName: e.target.value })
                    }
                    flagSrc="/flags/en-gb.png" // ⬅️ Your flag path here
                    placeholder="Stock Status Name"
                />
            </FormSection>
        </div>

    );
}
