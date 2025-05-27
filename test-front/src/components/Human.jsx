
const Human = ({ human }) => {

    return (
        <>
            {human.map(human => <li> {human.name}</li>)}
            {human.map(human => <li> {human.planet}</li>)}
        </>
    )



}
export default Human