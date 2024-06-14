
const Contact = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(src/assets/backgrounds/Contact.jpeg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center flex flex-col space-y-60">
            <p className="font-bold text-6xl text-neutral-content">Contact Me:</p>
            <div className="card w-full bg-base-100 p-5 grid">
                <div className="card bg-warning text-black p-2">
                    I am always open to new opportunities and collaborations. Whether you have a project inquiry, a question, or just want to connect, feel free to reach out. Your message is important to me, and I will try to respond as promptly as possible. Let's work together to create something amazing!
                </div>

                <p className="divider text-xl">Find me on:</p>
                <div className="flex lg:flex-row flex-col">
                    <button className="btn h-24 bg-primary lg:w-3/12 flex flex-row rounded-lg " onClick={() => window.location = ("https://www.linkedin.com/in/sai-adiraju-193389291/")}>
                        <img  src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png" />
                        <p className="text-primary-content text-xl h-35"> LinkedIn </p>
                    </button>
                    <button className="btn h-24 bg-primary lg:w-3/12 flex flex-row rounded-lg " onClick={() => window.location = ("https://www.upwork.com/freelancers/~015595bd53a9cc0464?mp_source=share")}>
                        <img src="https://www.upwork.com/favicon.ico" />
                        <p className="text-primary-content text-xl h-"> Upwork </p>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact