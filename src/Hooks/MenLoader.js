export const MenLoader = async () => {
    const res = await fetch("http://localhost:3000/card");
    return res.json();
}