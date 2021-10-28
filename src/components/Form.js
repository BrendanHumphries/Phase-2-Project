function Form({formData, setFormData, handleFormSubmit}) {
    function handleFormChange(event) {
        if (event.target.name !== 'price') {
            setFormData({...formData, [event.target.name]:event.target.value})
        } else {
            setFormData({...formData, [event.target.name]:parseInt(event.target.value, 10)})
        }
    }
    return (
        <div>
            <h2>Have an idea for a new meal kit? Fill out the form below!</h2>
            <form onSubmit={handleFormSubmit}>
                <label> Meal Name: </label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleFormChange}
                ></input>
                <label> Description: </label>
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleFormChange}
                ></input>
                <label> Image: </label>
                <input
                    type='text'
                    name='image'
                    value={formData.image}
                    onChange={handleFormChange}
                ></input>
                <label> Price: $ </label>
                <input
                    type='number'
                    name='price'
                    value={formData.price}
                    onChange={handleFormChange}
                ></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Form;