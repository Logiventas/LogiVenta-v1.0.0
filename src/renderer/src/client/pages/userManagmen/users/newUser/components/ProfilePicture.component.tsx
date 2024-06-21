import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import defaultProfilePicture from '../../../../../../assets/img/usuario.png'; // Ajusta la ruta según sea necesario

interface ProfilePictureProps {
    file: File | null;
    onFileChange: (file: File) => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ file, onFileChange }) => {
    const [preview, setPreview] = useState<string>(defaultProfilePicture);

    React.useEffect(() => {
        if (file) {
            // Resize the image and set the preview
            Resizer.imageFileResizer(
                file,
                200,
                200,
                'JPEG',
                100,
                0,
                (uri) => {
                    setPreview(uri as string);
                },
                'base64'
            );
        }
    }, [file]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileChange(file);
        }
    };

    return (
        <div className=''>
            <div style={{ borderRadius: "50%", overflow: "hidden" ,width:'150px',height:'150px' }} className="img-fluid m-auto img-thumbnail mb-1">
                <img
                    src={preview}
                    alt="Profile"
                    className='w-100 h-100'
                    style={{  objectFit: "cover", borderRadius: "50%" }}
                />
            
            </div>
            <div className='d-flex'>
                <input
                    style={{ display: 'none' }}
                    className="form-control-sm bg-primary mb-2"
                    type="file"
                    id="profilePicture"
                    onChange={handleFileChange}
                />
                <label
                    htmlFor="profilePicture"
                    style={{ }}
                    className="btn btn-primary col-12 form-control-sm mb-2"
                >
                   Cargar Foto
                </label>
            </div>
        </div>
    );
};

export default ProfilePicture;
