const Home = () => {
    return (
        <>
            <div className="px-4 py-16 bg-base-100">
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">Hi I'm Sai Adiraju</div>
            </div>
            <div className="flex justify-center">
                <div className="card w-96 glass">
                    <figure><img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="WebDev"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">A Full Stack Web Developer</h2>
                            <p className="badge badge-primary">Junior</p>
                            <p>Self Taught</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="card w-96 glass">
                    <figure><img src="https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ElecEng"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">An Electronics Engineer</h2>
                            <p className="badge badge-primary">Student</p>
                            <p>Year 1</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More!</button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Home