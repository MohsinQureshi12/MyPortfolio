
import { chooseUsData } from "../../Constant";



export function ChoseUsComponent() {
    return (
        <div className="w-full py-10 lg:py-20 bg-primary/10">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Header Section */}
                <div className="mb-12 lg:mb-16">
                    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                        WHY STREET CODER
                    </p>
                    <h1 className="lg:text-3xl text-lg leading-[1.2] font-bold text-[#0f172a] max-w-2xl tracking-tight">
                        Engineered to international standards.
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chooseUsData?.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="w-full bg-white rounded-[20px] border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer"
                            >
                                {/* Icon */}
                                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h2 className="text-[20px] font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
