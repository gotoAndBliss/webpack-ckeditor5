import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Alignment     from '@ckeditor/ckeditor5-alignment/src/alignment';

// Create heading node
// const heading = document.createElement('h1')
// heading.textContent = 'Interesting!'
// Append heading node to the DOM
// const app = document.querySelector('#root')
// app.append( heading )

// <CKEditor
//   config={config}
//   data={''}
//   editor={ClassicEditor}
// /> 

ClassicEditor
    .create( document.querySelector( '#root' ), {
        // plugins: [ Essentials, Paragraph, Bold, Italic ],
        plugins: [ Alignment ],
        toolbar: [ 'bold', 'italic', 'alignment:left', 'alignment:center', 'alignment:right' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );

