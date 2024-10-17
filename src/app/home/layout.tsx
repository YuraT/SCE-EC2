import Image from 'next/image'

export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="">
            <div className="bg-slate-100 fixed w-screen h-[75px] flex items-center shadow p-3">
                <Image
                    src="/img/cloud.png"
                    width={50}
                    height={50}
                    alt="SCE Cloud"
                    className="mr-3"
                />
                <h1 className="text-xl text-black font-bold">SCE Cloud</h1>
                <div className="grow"></div>
                <div className="border-2 border-black rounded-full">
                    <Image
                        src="/img/profile.png"
                        width={35}
                        height={35}
                        alt="SCE Cloud"
                        className=""
                    />
                </div>
            </div>
            <div className="bg-slate-100 w-[200px] h-screen">
                <div className="h-[75px]"></div>
                <ul>
                    <li className="p-5 shadow">
                        <div className="flex items-center">
                            <Image
                                src="/img/disk.png"
                                width={25}
                                height={25}
                                alt="SCE Cloud"
                                className="mr-3"
                            />
                            <p className="text-gray-500">Manage VMs</p>
                        </div>
                    </li>
                    <li className="p-5 shadow">
                        <div className="flex items-center">
                            <Image
                                src="/img/plus.png"
                                width={25}
                                height={25}
                                alt="SCE Cloud"
                                className="mr-3"
                            />
                            <p className="text-gray-500">Create VM</p>
                        </div>
                    </li>
                    <li className="p-5 shadow">
                        <div className="flex items-center">
                            <Image
                                src="/img/terminal.png"
                                width={25}
                                height={25}
                                alt="SCE Cloud"
                                className="mr-3"
                            />
                            <p className="text-gray-500">Web Terminal</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}