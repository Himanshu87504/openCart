// pages/CurrencyEdit.jsx
import React, { useState } from "react";
import FormInput from "../Language/FormInput";
import FormToggle from "../Language/FormToggle";
import FormSection from "../Language/FormSection";
import Breadcrumb from "../../../Breadcrumb";

export default function CurrencyEdit() {
    const [form, setForm] = useState({
        title: "Australian Dollar",
        code: "AUD",
        symbolLeft: "$",
        symbolRight: "",
        decimal: 2,
        value: "1.37243543",
        status: false,
    });

    const set = (name, value) =>
        setForm((prev) => ({ ...prev, [name]: value }));

    return (
        <div className="pl-3 bg-[#F6F6F6]">
            <Breadcrumb
                title="Language"
                paths={[
                    { name: "Home" },
                    { name: "Language", color: "text-blue-400" },
                ]}
            />
            <FormSection title="Edit Currency">
                <FormInput
                    label="Currency Title"
                    name="title"
                    required
                    value={form.title}
                    onChange={(e) => set("title", e.target.value)}
                />

                <div className="space-y-1 w-full">
                    <FormInput
                        label="Code"
                        name="code"
                        required
                        value={form.code}
                        onChange={(e) => set("code", e.target.value)}
                    />
                    <p className="text-xs text-gray-500">
                        Do not change if this is your default currency.
                    </p>
                </div>

                <FormInput
                    label="Symbol Left"
                    name="symbolLeft"
                    value={form.symbolLeft}
                    onChange={(e) => set("symbolLeft", e.target.value)}
                />

                <FormInput
                    label="Symbol Right"
                    name="symbolRight"
                    value={form.symbolRight}
                    onChange={(e) => set("symbolRight", e.target.value)}
                />

                <FormInput
                    label="Decimal Places"
                    type="number"
                    name="decimal"
                    value={form.decimal}
                    onChange={(e) => set("decimal", e.target.value)}
                />

                <div className="space-y-1 w-full">
                    <FormInput
                        label="Value"
                        name="value"
                        value={form.value}
                        onChange={(e) => set("value", e.target.value)}
                    />
                    <p className="text-xs text-gray-500">
                        Set to 1 for your default currency.
                    </p>
                </div>

                <FormToggle
                    label="Status"
                    checked={form.status}
                    onChange={() => set("status", !form.status)}
                />
            </FormSection>
        </div>
    );
}
