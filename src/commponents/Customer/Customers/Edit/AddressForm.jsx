import { useState } from "react";

export default function AddressForm() {
    const [addresses, setAddresses] = useState([
        {
            firstName: "",
            lastName: "",
            company: "",
            address1: "",
            address2: "",
            city: "",
            postcode: "",
            country: "United Kingdom",
            state: "Cheshire",
            default: false,
        },
    ]);

    const addAddress = () => {
        setAddresses([
            ...addresses,
            {
                firstName: "",
                lastName: "",
                company: "",
                address1: "",
                address2: "",
                city: "",
                postcode: "",
                country: "United Kingdom",
                state: "Cheshire",
                default: false,
            },
        ]);
    };

    const removeAddress = (index) => {
        if (addresses.length > 1) {
            const updated = addresses.filter((_, i) => i !== index);
            setAddresses(updated);
        }
    };

    const updateField = (index, field, value) => {
        const updated = [...addresses];
        updated[index][field] = value;
        setAddresses(updated);
    };

    return (
        <div className="p-6 space-y-10">
            {addresses.map((addr, index) => (
                <div key={index} className="border rounded-xl p-6 shadow-md relative bg-white">

                    {/* REMOVE BUTTON */}
                    {index > 0 && (
                        <button
                            onClick={() => removeAddress(index)}
                            className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full"
                        >
                            −
                        </button>
                    )}

                    <h2 className="text-xl font-bold mb-4">Address {index + 1}</h2>

                    <div className="grid grid-cols-1 gap-4">

                        {/* First Name */}
                        <div>
                            <label className="font-semibold">First Name *</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.firstName}
                                onChange={(e) => updateField(index, "firstName", e.target.value)}
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="font-semibold">Last Name *</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.lastName}
                                onChange={(e) => updateField(index, "lastName", e.target.value)}
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="font-semibold">Company</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.company}
                                onChange={(e) => updateField(index, "company", e.target.value)}
                            />
                        </div>

                        {/* Address 1 */}
                        <div>
                            <label className="font-semibold">Address 1 *</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.address1}
                                onChange={(e) => updateField(index, "address1", e.target.value)}
                            />
                        </div>

                        {/* Address 2 */}
                        <div>
                            <label className="font-semibold">Address 2</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.address2}
                                onChange={(e) => updateField(index, "address2", e.target.value)}
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="font-semibold">City *</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.city}
                                onChange={(e) => updateField(index, "city", e.target.value)}
                            />
                        </div>

                        {/* Postcode */}
                        <div>
                            <label className="font-semibold">Postcode *</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={addr.postcode}
                                onChange={(e) => updateField(index, "postcode", e.target.value)}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="font-semibold">Country *</label>
                            <select
                                className="w-full border p-2 rounded"
                                value={addr.country}
                                onChange={(e) => updateField(index, "country", e.target.value)}
                            >
                                <option>United Kingdom</option>
                                <option>United States</option>
                                <option>India</option>
                            </select>
                        </div>

                        {/* State */}
                        <div>
                            <label className="font-semibold">Region / State *</label>
                            <select
                                className="w-full border p-2 rounded"
                                value={addr.state}
                                onChange={(e) => updateField(index, "state", e.target.value)}
                            >
                                <option>Cheshire</option>
                                <option>London</option>
                                <option>Manchester</option>
                            </select>
                        </div>

                        {/* Default Radio */}
                        <div className="flex items-center space-x-2 mt-2">
                            <input
                                type="radio"
                                name="defaultAddress"
                                checked={addr.default}
                                onChange={() =>
                                    setAddresses(
                                        addresses.map((a, i) => ({
                                            ...a,
                                            default: i === index,
                                        }))
                                    )
                                }
                            />
                            <label className="font-semibold">Default</label>
                        </div>

                    </div>
                </div>
            ))}

            {/* ADD ADDRESS BUTTON */}
            <button
                onClick={addAddress}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                + Add Address
            </button>
        </div>
    );
}
