import React, { useState } from "react";

export default function StartupEdit() {
  
    const [routes, setRoutes] = useState([
        { store: "Default", route: "account/%" }
    ]);

    const [modules, setModules] = useState({
        column_left: [],
        content_top: ["Account"],
        content_bottom: [],
        column_right: ["Account"]
    });

  
    const addRoute = () => {
        setRoutes([...routes, { store: "Default", route: "" }]);
    };

    const removeRoute = (index) => {
        setRoutes(routes.filter((_, i) => i !== index));
    };

    const updateRoute = (index, field, value) => {
        const updated = [...routes];
        updated[index][field] = value;
        setRoutes(updated);
    };

    const addModule = (section) => {
        setModules({
            ...modules,
            [section]: [...modules[section], "Account"]
        });
    };

    const removeModule = (section, index) => {
        setModules({
            ...modules,
            [section]: modules[section].filter((_, i) => i !== index)
        });
    };

    return (
        <div className="p-6 border rounded bg-white shadow max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Edit Layout</h2>

            <h3 className="text-lg font-semibold mb-4">
                Choose the store and routes to be used with this layout
            </h3>

            <div className="mb-6">
                <label className="font-medium">Layout Name</label>
                <input
                    type="text"
                    defaultValue="Account"
                    className="block w-full border rounded p-2 mt-1"
                />
            </div>

            {routes.map((row, index) => (
                <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-end border p-4 rounded mb-4"
                >
                    <div className="col-span-5">
                        <label className="font-medium">Store</label>
                        <select
                            className="w-full p-2 border rounded mt-1"
                            value={row.store}
                            onChange={(e) => updateRoute(index, "store", e.target.value)}
                        >
                            <option>Default</option>
                        </select>
                    </div>

                    <div className="col-span-5">
                        <label className="font-medium">Route</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mt-1"
                            value={row.route}
                            onChange={(e) => updateRoute(index, "route", e.target.value)}
                        />
                    </div>

                    <div className="col-span-1">
                        <button
                            onClick={() => removeRoute(index)}
                            className="bg-red-500 text-white p-2 rounded w-full"
                        >
                            -
                        </button>
                    </div>

                    <div className="col-span-1">
                        <button
                            onClick={addRoute}
                            className="bg-blue-500 text-white p-2 rounded w-full"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}

           
            <h3 className="text-lg font-semibold my-6">
                Choose the position of the modules
            </h3>

            
            <div className="grid grid-cols-3 gap-6">

               
                <ModuleSection
                    title="Column Left"
                    section="column_left"
                    modules={modules}
                    addModule={addModule}
                    removeModule={removeModule}
                />

                
                <ModuleSection
                    title="Content Top"
                    section="content_top"
                    modules={modules}
                    addModule={addModule}
                    removeModule={removeModule}
                />

                
                <ModuleSection
                    title="Column Right"
                    section="column_right"
                    modules={modules}
                    addModule={addModule}
                    removeModule={removeModule}
                />
            </div>

           
            <div className="mt-8">
                <ModuleSection
                    title="Content Bottom"
                    section="content_bottom"
                    modules={modules}
                    addModule={addModule}
                    removeModule={removeModule}
                />
            </div>
        </div>
    );
}


function ModuleSection({ title, section, modules, addModule, removeModule }) {
    return (
        <div>
            <h4 className="font-semibold text-center mb-2">{title}</h4>

            <div className="border rounded p-4 min-h-[100px]">

               
                {modules[section].map((mod, index) => (
                    <div
                        key={index}
                        className="flex items-center border p-2 rounded mb-3"
                    >
                        <select className="flex-grow border rounded p-1">
                            <option>Account</option>
                        </select>

                        <button className="bg-gray-200 p-2 ml-2 rounded">✎</button>

                        <button
                            onClick={() => removeModule(section, index)}
                            className="bg-red-500 text-white p-2 ml-2 rounded"
                        >
                            -
                        </button>
                    </div>
                ))}

             
                <button
                    onClick={() => addModule(section)}
                    className="bg-blue-500 text-white p-2 rounded block mx-auto"
                >
                    +
                </button>
            </div>
        </div>
    );
}
