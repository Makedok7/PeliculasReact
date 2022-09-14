import styles from '../styles/Movie.css';

function Movie(props) {
    return (
        <main className={styles.movie} class="d-flex flex-column mx-auto py-1" style={{ width: "90%"}}>
            <hr class="separatorMovie"></hr>
            <div class="m-0 align-items-baseline d-flex">
                <h1 class="titleMovie">{props.title}</h1>
                <time class="durationMovie">{props.duration}</time>
            </div>

            <div class="d-flex">
                <img src={props.image} alt="imageMovie" class="imageMovie col col-2 rounded" />

                <section class="informationMovie d-flex flex-column flex-wrap ">
                    <div class="synopsisDescription mx-2">
                        <h1>Sinopsis</h1>
                        <p class="text-justify ">
                            {props.description}
                        </p>
                    </div>

                    <div class="actorsTags d-flex justify-content-between ">
                        <div class="actorsMovie col-4 mx-3 d-flex flex-wrap align-items-baseline justify-content-start">
                            <p >
                                {props.actors}
                            </p>
                        </div>
                        <div class="tagsMovie col-4 mx-3 d-flex flex-wrap align-items-baseline justify-content-end" >
                            {Array.isArray(props.tags) ? (
                                props.tags.map((tag) => (
                                    <span class="badge bg-dark bg-gradient mx-1 tag">{tag}</span>
                                ))
                            ) : (
                                <span >{props.tags}</span>
                            )}
                        </div>
                    </div>
                </section>

                <section class="reviewsMovie d-flex flex-wrap flex-column">
                    {Array.isArray(props.reviews) ? (
                        props.reviews.map((review) => (
                            <li class="list-group">
                                <a href={review[0]} class="reviewPage">{review[1]}</a>
                                <div class="progress" style={{height:"10px"}}>
                                <div class="progress-bar bg-success bg-gradient" role="progressbar"
                                    aria-valuemin="0" aria-valuemax="100" style={{width:review[2]}}>{review[2]}</div>
                                </div>

                            </li>
                        ))
                    ) : (
                        <li >{props.reviews}</li>
                    )}
                </section>

            </div>
            <hr class="separatorMovie"></hr>
        </main>
    )
}
export default Movie;