import Landing from "../layouts/Landing";
import React from "react";
import CardLineChart from "../components/common/Cards/CardLineChart";
import CardBarChart from "../components/common/Cards/CardBarChart";

export default function Home() {
    return (
        <Landing>
            {/*<section className="pb-20 bg-blueGray-200 -mt-24">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="flex flex-wrap">*/}
            {/*            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">*/}
            {/*                <div*/}
            {/*                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">*/}
            {/*                    <div className="px-4 py-5 flex-auto">*/}
            {/*                        <div*/}
            {/*                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">*/}
            {/*                            <i className="fas fa-award"/>*/}
            {/*                        </div>*/}
            {/*                        <h6 className="text-xl font-semibold">Tổng số người đăng ký</h6>*/}
            {/*                        <p className="mt-2 mb-4 text-blueGray-500">*/}
            {/*                            Divide details about your product or agency work into*/}
            {/*                            parts. A paragraph describing a feature will be enough.*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="w-full md:w-4/12 px-4 text-center">*/}
            {/*                <div*/}
            {/*                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">*/}
            {/*                    <div className="px-4 py-5 flex-auto">*/}
            {/*                        <div*/}
            {/*                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">*/}
            {/*                            <i className="fas fa-retweet"/>*/}
            {/*                        </div>*/}
            {/*                        <h6 className="text-xl font-semibold">Số người đã được tiêm</h6>*/}
            {/*                        <p className="mt-2 mb-4 text-blueGray-500">*/}
            {/*                            Keep you user engaged by providing meaningful information.*/}
            {/*                            Remember that by this time, the user is curious.*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="pt-6 w-full md:w-4/12 px-4 text-center">*/}
            {/*                <div*/}
            {/*                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">*/}
            {/*                    <div className="px-4 py-5 flex-auto">*/}
            {/*                        <div*/}
            {/*                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">*/}
            {/*                            <i className="fas fa-fingerprint"/>*/}
            {/*                        </div>*/}
            {/*                        <h6 className="text-xl font-semibold">Số người chờ tiêm</h6>*/}
            {/*                        <p className="mt-2 mb-4 text-blueGray-500">*/}
            {/*                            Write a few lines about each one. A paragraph describing a*/}
            {/*                            feature will be enough. Keep you user engaged!*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="pb-20 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                            <CardLineChart />
                        </div>
                        <div className="w-full xl:w-4/12 px-4">
                            <CardBarChart />
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className="relative py-20">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="flex flex-wrap">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-12">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold">Thông tin về chúng tôi</h2>
                            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                Thành viên nhóm 6
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="/member_1.png"
                                    className="shadow-lg rounded-full mx-auto w-48 h-48"
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Nghê Quyết Tiến</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Trưởng nhóm
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="/member_2.png"
                                    className="shadow-lg rounded-full mx-auto w-48 h-48"
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Phạm Tiến Đạt</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Backend-Developer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="/member_3.png"
                                    className="shadow-lg rounded-full mx-auto w-48 h-48"
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Vũ Minh Huy</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Thư ký
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 my-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="/member_4.png"
                                    className="shadow-lg rounded-full mx-auto w-48 h-48"
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Phương Thảo</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Thiết kế
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 my-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="/member_5.png"
                                    className="shadow-lg rounded-full mx-auto w-48 h-48"
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Nguyễn Tiến Du</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Web Developer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 my-12 px-4">
                            <div className="px-6">
                                <img
                                    alt="..."
                                    src="/member_6.png"
                                    className="shadow-lg rounded-full mx-auto w-48 h-48"
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Nguyễn Anh Quân</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        WEB DEVELOPER
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Landing>
    )
}