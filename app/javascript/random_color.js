export default function random_color(){
    const random_colors = ["#481E9D", "#8D74C0", "#CA4B57", "#2B2D42", "#1C77C3", "#81B29A", "#E98039"];
    var random_number = Math.round(Math.random()*(random_colors.length-1))
    return random_colors[random_number]
}