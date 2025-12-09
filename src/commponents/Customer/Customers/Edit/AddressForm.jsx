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
        <div className="bg-[#F6F6F6] min-h-screen p-1 space-y-5 pl-6 pr-3">

            {addresses.map((addr, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-300  p-3 relative"
                >

                    {index > 0 && (
                        <button
                            onClick={() => removeAddress(index)}
                            className="absolute top-3 right-3 bg-red-600 text-white w-8 h-8 rounded-full text-xl flex items-center justify-center"
                        >
                            −
                        </button>
                    )}

                    <h2 className="text-xl font-bold mb-6">Address {index + 1}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* First Name */}
                        <div>
                            <label className="font-medium">First Name *</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.firstName}
                                onChange={(e) => updateField(index, "firstName", e.target.value)}
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="font-medium">Last Name *</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.lastName}
                                onChange={(e) => updateField(index, "lastName", e.target.value)}
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="font-medium">Company</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.company}
                                onChange={(e) => updateField(index, "company", e.target.value)}
                            />
                        </div>

                        {/* Address 1 */}
                        <div>
                            <label className="font-medium">Address 1 *</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.address1}
                                onChange={(e) => updateField(index, "address1", e.target.value)}
                            />
                        </div>

                        {/* Address 2 */}
                        <div>
                            <label className="font-medium">Address 2</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.address2}
                                onChange={(e) => updateField(index, "address2", e.target.value)}
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="font-medium">City *</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.city}
                                onChange={(e) => updateField(index, "city", e.target.value)}
                            />
                        </div>

                        {/* Postcode */}
                        <div>
                            <label className="font-medium">Postcode *</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.postcode}
                                onChange={(e) => updateField(index, "postcode", e.target.value)}
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="font-medium">Country *</label>
                            <select
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
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
                            <label className="font-medium">Region / State *</label>
                            <select
                                className="w-full border border-gray-300 p-3 rounded mt-1 bg-white"
                                value={addr.state}
                                onChange={(e) => updateField(index, "state", e.target.value)}
                            >
                                <option>Cheshire</option>
                                <option>London</option>
                                <option>Manchester</option>
                            </select>
                        </div>

                        {/* Default Address */}
                        <div className="flex items-center gap-2 mt-2">
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
                            <label className="font-medium">Default</label>
                        </div>

                    </div>
                </div>
            ))}

            {/* ADD ADDRESS BUTTON */}
            <button
                onClick={addAddress}
                className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700"
            >
                + Add Address
            </button>
        </div>
    );
}
