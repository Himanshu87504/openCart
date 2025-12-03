// Renders only the items it receives
export default function ExtensionCard({ items }) {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="w-full  rounded bg-white "
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded"
                    />

                    <h3 className="mt-2 text-2xl font-semibold text-blue-700">
                        {item.title}
                    </h3>

                    <div className="mt-1 text-sm text-gray-700">
                        {item.price}
                    </div>



                    <div className="mt-1 flex justify-between items-center text-sm text-gray-600">
                        <div className="mr-2 ">
                            {"★★★★★☆☆☆☆☆".slice(5 - item.rating, 10 - item.rating)}
                        </div>
                        <span>{item.rating} reviews</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
