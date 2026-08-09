import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productList } from "../../Constant";


export function PortfolioproductComponent() {
    return (
        <div className="w-full  py-10 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Header Section */}
                <div className="mb-12">
                    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
                        Products
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="lg:w-[70%]">
                            <h1 className="text-4xl lg:text-[56px] leading-[1.1] font-bold text-gray-900 mb-4 tracking-tight">
                                Production-ready platforms shipped from day one.
                            </h1>
                            <p className="text-lg text-gray-600">
                                Live dashboards from real customer deployments.
                            </p>
                        </div>
                        <Link to="/product-page" className="flex-shrink-0">
                            <p className="flex gap-2 items-center mt-4 text-primary lg:justify-start justify-center text-base">
                                All products <ArrowRight size={18} />
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productList?.map((product) => (
                        <div
                            key={product.id}
                            className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Product Image */}
                            <div className="w-full h-[240px] bg-gray-100 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Subtle overlay for realism */}
                                <div className="absolute inset-0 bg-black opacity-[0.02]"></div>
                            </div>

                            {/* Product Content */}
                            <div className="p-4">
                                <p className="text-primary font-bold text-xs uppercase tracking-wide mb-2">
                                    {product.category}
                                </p>
                                <h2 className="text-[22px] font-bold text-black mb-2">
                                    {product.title}
                                </h2>
                                <p className="text-gray-500 leading-relaxed text-[15px]">
                                    {product.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
