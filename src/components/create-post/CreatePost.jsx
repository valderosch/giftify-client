import React, { useRef, useState, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './CreatePost.css';
import ImageGallery from "../service/images/Imagegallery";
import fileImg from "../../assets/icons/ui/pin.png";
import {getValue} from "@testing-library/user-event/dist/utils";
import Access from "../service/access/Access";
import fileicon from '../../assets/icons/ui/document.png';

const CreatePost = ({ role }) => {
    const [content, setContent] = useState('');
    const [previewContent, setPreviewContent] = useState('');
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const [fileCount, setFileCount] = useState(0);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [postSettings, setPostSettings] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const quillRef = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        if (quillInstance.current) return;

        quillInstance.current = new Quill(quillRef.current, {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'font': [] }],
                    [{ 'size': ['16px', '15px', '16px'] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                ],
            },
        });

        quillInstance.current.on('text-change', () => {
            setContent(quillInstance.current.root.innerHTML);
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreviewContent(content);
        }, 100);
        return () => clearTimeout(timer);
    }, [content]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
    };

    const handleImageRemove = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const moveImage = (index, direction) => {
        const newImages = [...images];
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= newImages.length) return;
        [newImages[index], newImages[targetIndex]] = [newImages[targetIndex], newImages[index]];
        setImages(newImages);
    };

    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (index) => {
        if (draggedIndex === null) return;
        const newImages = [...images];
        const [draggedImage] = newImages.splice(draggedIndex, 1);
        newImages.splice(index, 0, draggedImage);
        setImages(newImages);
        setDraggedIndex(null);
    };

    const handleFileUpload = (event) => {
        const newFiles = Array.from(event.target.files);

        if (fileCount + newFiles.length > 3) {
            alert('You can only upload up to 3 files.');
            return;
        }

        setFiles([...files, ...newFiles]);
        setFileCount(fileCount + newFiles.length);
    };
    const handleRemoveFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        setFileCount(fileCount - 1);
    };

    const handleTitle  = (event) => {
        setPostTitle(event.target.value);
    }

    return (
        <div className="create-post">
            {role === 'author' ? (
                <div className="author-tools">
                    <div className="settings-panel" >
                        <div className="settings-label">Post Settings</div>
                        <div className="access-block">
                            <div className="form-label">Access:</div>
                            <select className="select">
                                <option><p className="cat cat-c">C</p> All</option>
                                <option><p className="cat cat-b">B</p> Premium</option>
                                <option><p className="cat cat-a">A+</p> Exclusive</option>
                            </select>
                        </div>
                        <div className="price-block">
                            <div className="form-label">Price(optional):</div>
                            <input type="number" placeholder="price" className="price-bar"/>
                        </div>
                        {/*<div className="date-block">*/}
                        {/*    <div className="form-label">Publish date:</div>*/}
                        {/*    <input className="date-bar" type="datetime-local" />*/}
                        {/*</div>*/}
                        <div className="control-block">
                            <div className="publish-now">Post now</div>
                            {/*<div className="schedule-post">Post later</div>*/}
                        </div>
                    </div>

                    <div className="editor-container">
                        <div className="image-carousel">
                            {images.map((src, index) => (
                                <div
                                    key={index}
                                    className="carousel-image"
                                    draggable
                                    onDragStart={() => handleDragStart(index)}
                                    onDragOver={handleDragOver}
                                    onDrop={() => handleDrop(index)}
                                >
                                    <div className="image-controls">
                                        <button className="img-btn" onClick={() => moveImage(index, -1)}>⬅️</button>
                                        <button className="img-btn" onClick={() => handleImageRemove(index)}>🗑️</button>
                                        <button className="img-btn" onClick={() => moveImage(index, 1)}>➡️</button>
                                    </div>
                                    <div className="image-block">
                                        <img className="img-img" src={src} alt="Uploaded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="title-editor">
                            <div className="image-add">
                                <label htmlFor="fileinput" >
                                    <img src={fileImg} alt="" className="inputimg"/>
                                </label>
                                <input
                                    type="file" className="image-input" id="fileinput"
                                    placeholder="⁂" multiple onChange={handleImageUpload}
                                    accept="image/png, image/jpeg"
                                ></input>
                            </div>
                            <input
                                type="text"
                                className="post-title"
                                value={postTitle}
                                onChange={handleTitle}
                                placeholder="Enter post title"
                            />
                        </div>
                        <div ref={quillRef} className="text-editor"></div>
                        <div className="file-input">
                            <div className="file-add">
                                <label htmlFor="fileupload" className="fileinp-btn">
                                    Add Files <img src={fileImg} alt="file" className="add-file-img"/>
                                </label>
                                <input
                                    type="file"
                                    id="fileupload"
                                    multiple
                                    onChange={handleFileUpload}
                                    className="file-input-field"
                                />
                            </div>
                            <div className="file-gallery">
                                {files.map((file, index) => (
                                    <div key={index} className="file-item">
                                        <span className="filename">{file.name}</span>
                                        <div onClick={() => handleRemoveFile(index)} className="file-delete-btn">×</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="preview-container">
                        <div className="preview-post-body">
                            <ImageGallery images={images} />
                            <div className="title">{postTitle}</div>
                            <div className="preview-content-text" dangerouslySetInnerHTML={{ __html: previewContent }} />
                            <div className="file-gallery">
                                {files.map((file, index) => (
                                    <div key={index} className="file-item">
                                        <img src={fileicon} alt="files" className="doc-icon"/>
                                        <span className="filename">{file.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="no-access-screen">
                    <Access/>
                    <div ref={quillRef} className="text-editor-broke" style={{display: "none"}}></div>
                </div>
            )}
        </div>
    );
};

export default CreatePost;
