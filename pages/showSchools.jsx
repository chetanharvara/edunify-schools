// pages/showSchools.jsx
import { schoolsData } from './schoolData'; // Update the path accordingly
// import styles from '..app/page.module.css'
import styles from '../app/globals.css'


const ShowSchools = ({ schools }) => {
    return (
        <div class='mainbody w-full'>
            <div class='w-full h-10 bg-slate-900 text-center'>
                <h1 className="w-full flex-none mt-2 order-1 text-3xl font-bold  text-slate-200">
                            Schools
                        </h1>
            </div>
            <div id='SchoolSection' class='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5'>
            
            {schools.map((school) => (
                <div key={school.id} class="schoolProfile flex font-sans w-full">

                    <div className="flex-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h1 className="w-full flex-none mt-2 order-1 text-3xl font-bold  text-gray-200">
                            {school.name}
                        </h1>
                        <div className="text-sm font-medium text-slate-400">
                            {school.address}
                        </div>
                        <div className="text-sm font-medium text-slate-400">
                            {school.city}
                        </div>
                        <div className="text-sm font-medium text-slate-400">
                            {school.state}
                        </div>
                        <div className="text-sm font-medium text-slate-400 flex pt-2">
                            <div class='flex-none flex items-center justify-center pr-2 text-black'>
                            <svg height='15' width='15' fill='#ffffff' viewBox="0 0 28.314 28.323"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/></svg>
                            </div>
                            {school.contact}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
    );
};

export async function getServerSideProps() {
    try {
        // Convert schoolsData to a plain JavaScript array before returning
        const schools = JSON.parse(JSON.stringify(schoolsData));

        return {
            props: { schools },
        };
    } catch (error) {
        console.error('Error parsing schoolsData:', error);
        return {
            props: { schools: [] },
        };
    }
}

export default ShowSchools;
