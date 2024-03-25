import CategorySidebar from "./_components/CategorySidebar";

export default function layout({ children }) {
    return (
        <div className="grid grid-cols-4 mt-1">
            <div className=' hidden md:block'>
                <CategorySidebar />
            </div>
            <div className=" col-span-4 md:col-span-3 sm:col-span-4 ml-7 mt-5">
                {children}
            </div>
        </div>
    )
}