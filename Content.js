const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

    const handleClick = () => {
        console.log('You clicked it')
    }
    
    const handleClick2 = (name) => {
        console.log('${name} You clicked it')
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2('Dave')}>Click it</button>

        </main>
    )
}

export default Content
