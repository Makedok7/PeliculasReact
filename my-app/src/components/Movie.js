import '../styles/Movie.css';

function Movie(props) {
    return (
        <main className="d-flex flex-column mx-auto py-1" style={{ width: "90%"}}>
            <hr className="separatorMovie"></hr>
            <div className="m-0 align-items-baseline d-flex">
                <h1 className="titleMovie">{props.title}</h1>
                <time className="durationMovie">{props.duration}</time>
            </div>

            <div className="d-flex">
                <img src={props.image} alt="imageMovie" className="imageMovie col col-2 rounded" />

                <section className="informationMovie d-flex flex-column flex-wrap ">
                    <div className="synopsisDescription mx-2">
                        <h1>Sinopsis</h1>
                        <p className="text-justify ">
                            {props.description}
                        </p>
                    </div>

                    <div className="actorsTags d-flex justify-content-between ">
                        <div className="actorsMovie col-4 mx-3 d-flex flex-wrap align-items-baseline justify-content-start">
                            <p >
                                {props.actors}
                            </p>
                        </div>
                        <div className="tagsMovie col-4 mx-3 d-flex flex-wrap align-items-baseline justify-content-end" >
                            {Array.isArray(props.tags) ? (
                                props.tags.map((tag,i) => (
                                    <span className="badge bg-dark bg-gradient mx-1 tag" key={i}>{tag}</span>
                                ))
                            ) : (
                                <span >{props.tags}</span>
                            )}
                        </div>
                    </div>
                </section>

                <section className="reviewsMovie d-flex flex-wrap flex-column">
                    {Array.isArray(props.reviews) ? (
                        props.reviews.map((review,i) => (
                            <li className="list-group" key={i}>
                                <a href={review[0]} className="reviewPage">{review[1]}</a>
                                <div className="progress" style={{height:"10px"}}>
                                <div className="progress-bar bg-success bg-gradient" role="progressbar"
                                    aria-valuemin="0" aria-valuemax="100" style={{width:review[2]}}>{review[2]}</div>
                                </div>

                            </li>
                        ))
                    ) : (
                        <li >{props.reviews}</li>
                    )}
                </section>

            </div>
            <hr className="separatorMovie"></hr>
        </main>
    )
}
export default Movie;