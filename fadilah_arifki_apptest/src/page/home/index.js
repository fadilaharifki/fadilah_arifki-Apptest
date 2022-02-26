export default function Home() {
    return (
        <div className="bg-orange-500 w-screen">
            <div className="bg-orange-500 px-4 lg:px-24 py-6 md:py-24 2xl:py-32">
                <div className="flex flex-col lg:flex-row justify-between bg-white text-orange-700 p-10 rounded-3xl">
                    <div className="md:w-6/12 pb-10">
                        <div className="uppercase text-2xl md:text-4xl lg:text-6xl font-extrabold">Technical Test</div>
                        <img alt="image" className="md:w-64 lg:w-96" src="https://www.btpn.com/website/var/tmp/image-thumbnails/0/3558/thumb__content/btpn-smbc-approved_all-logo-01-copy.png" />
                        <div>Bank BTPN merupakan bank devisa hasil penggabungan usaha PT Bank Tabungan Pensiunan Nasional Tbk (BTPN) dengan PT Bank Sumitomo Mitsui Indonesia (SMBCI). Bank BTPN memfokuskan diri untuk melayani segmen mass market yang terdiri dari para pensiunan, pelaku usaha mikro, kecil, dan menengah (UMKM), komunitas prasejahtera produktif; segmen consuming class; serta segmen korporasi.</div>
                    </div>
                    <div className="md:w-5/12 py-32 aspect-w-10 aspect-h-6 md:aspect-w-16 md:aspect-h-4 md:py-0">
                        <iframe src="https://www.youtube-nocookie.com/embed/VhKr7BmuXxQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}