import React, { useRef, useState, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './CreatePost.css';
import ImageGallery from "../service/images/Imagegallery";

const CreatePost = ({ role }) => {
    const [content, setContent] = useState('');
    const [previewContent, setPreviewContent] = useState('');
    const [images, setImages] = useState([]);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [postSettings, setPostSettings] = useState([]);
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
                        <div className="date-block">
                            <div className="form-label">Publish date:</div>
                            <input className="date-bar" type="datetime-local" />
                        </div>
                        <div className="title-block">
                            <div className="form-label">Name your post</div>
                            <input type="text" className="post-title"/>
                        </div>
                        <div className="control-block">
                            <div className="publish-now">Post now</div>
                            <div className="schedule-post">Post later</div>
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
                                    <div className="image-bock">
                                        <img className="img-img" src={src} alt="Uploaded" />
                                    </div>
                                    <div className="image-controls">
                                        <button className="img-btn" onClick={() => moveImage(index, -1)}>⬅️</button>
                                        <button className="img-btn" onClick={() => handleImageRemove(index)}>🗑️</button>
                                        <button className="img-btn" onClick={() => moveImage(index, 1)}>➡️</button>
                                    </div>
                                </div>
                            ))}
                            <input type="file" multiple onChange={handleImageUpload} />
                        </div>
                        <div ref={quillRef} className="text-editor"></div>
                    </div>

                    <div className="preview-container">
                        <div className="preview-post-body">
                            <ImageGallery images={images} />
                            <div className="title">Your cool post</div>
                            <div className="preview-content-text" dangerouslySetInnerHTML={{ __html: previewContent }} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="become-author-banner">
                    {/* Інші елементи */}
                </div>
            )}
        </div>
    );
};

export default CreatePost;
