const submitName = (event) => {
    event.preventDefault();
    const name_input = document.getElementById('name_input');
    const name = name_input.value;
    console.log(name);
    const character_array = name.split("");
    const reversed_characters_array = character_array.reverse();
    const reversed_name = reversed_characters_array.join("");
    document.getElementById('reversed_name').innerHTML = reversed_name;
}