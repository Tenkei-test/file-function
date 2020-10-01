import React from 'react'

import { CSVReader, readString , jsonToCSV} from 'react-papaparse'

const buttonRef = React.createRef()


const FileUpload2 = (props) => {
    const {parameter, setParameter} = props;
    const handleOpenDialog = (e) => {
      // Note that the ref is set async, so it might be null at some point 
      if (buttonRef.current) {
        buttonRef.current.open(e)
      }
    }
    
    
    const handleOnFileLoad = (data) => {


      console.log('---------------------------')
      var data2 = JSON.stringify(data)
      var json = JSON.parse(data2);
      setParameter(json[0].data.type);

      console.log(json[0].data.type)
      console.log('---------------------------')

    }


    
  
    const handleOnError = (err, file, inputElem, reason) => {
      console.log(err)
    }
  
    const handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        setParameter("")
        console.log('---------------------------')

    }
  
    const handleRemoveFile = (e) => {
      // Note that the ref is set async, so it might be null at some point
      if (buttonRef.current) {
        buttonRef.current.removeFile(e)
      }
    }
  

      return (
        <CSVReader
          ref={buttonRef}
          onFileLoad={handleOnFileLoad}
          onError={handleOnError}
          noClick
          config={{header: true}}
          onRemoveFile={handleOnRemoveFile}
        >
          {({ file }) => (
            <aside
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10
              }}
            >
              <button
                type='button'
                onClick={handleOpenDialog}
                style={{
                  borderRadius: 0,
                  marginLeft: 20,
                  marginRight: 20,
                  width: '40%',
                  paddingLeft: 20,
                  paddingRight: 20
                }}
              >
                Browse file
              </button>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  height: 45,
                  lineHeight: 2.5,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: '60%'
                }}
              >
                {file && file.name}
              </div>
              <button
                style={{
                  borderRadius: 0,
                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 20
                }}
                onClick={handleRemoveFile}
              >
                Remove
              </button>
            </aside>
          )}
        </CSVReader>
      )
    
  }



  export default FileUpload2;
