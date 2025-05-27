
const Human = ({ human }) => {

    return (
        <>
            {human.map(human => (

                <div>
                    <img src="" alt="" />
                    <li key={human.id}> {human.name}, {human.planet}</li>
                </div>
            ))}
        </>
    )



}
export default Human