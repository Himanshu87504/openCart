import React, { useState } from "react";
import FormSection from "../Language/FormSection";
import FormInputWithFlag from "../StockStautes/FormInputWithFlag";

export default function SubscriptionStatusesEdit() {
    const [form, setForm] = useState({
        stockStatusName: "2-3 Days",
    });

    return (
        <FormSection title="Edit Stock Status">
            <FormInputWithFlag
                label="Order Status Name"
                required
                value={form.stockStatusName}
                onChange={(e) =>
                    setForm({ ...form, stockStatusName: e.target.value })
                }
                flagSrc="/flags/en-gb.png" // ⬅️ Your flag path here
                placeholder="Stock Status Name"
            />
        </FormSection>
    );
}
