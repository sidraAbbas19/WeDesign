import React from 'react';
import './Image-upload.css'
const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  const Profile =({
    onSubmit,
    src,
    
  })=>
    <div className="photo">
      <form onSubmit={onSubmit}>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
        <button type="submit" className="edit">Edit Profile </button>
      </form>
    </div>
       
        
  const Edit =({
    onSubmit,
    children,
  })=>
    <div className="photo">
      <form onSubmit={onSubmit}>
          {children}
      
      </form>
    </div>
  
 
    
    
  class CardProfile extends React.Component {
        state = {
          file: '',
          imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
          name:'',
          status:'',
          active: 'edit'
        }
        photoUpload = e =>{
            e.preventDefault();
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
              this.setState({
                file: file,
                imagePreviewUrl: reader.result
              });
            }
            reader.readAsDataURL(file);
          }
        
          
          handleSubmit= e =>{
            e.preventDefault();
            let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
            this.setState({
              active: activeP,
            })
          }
      
    render() {
      const {imagePreviewUrl, 
             active} = this.state;
      return (
        <div>
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
             
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} />)
              }
          
        </div>
      )
            }
  }
  export default CardProfile;
 




// function upload-file-component() {
//   return <div></div>;
// }

// export default upload-file-component;
