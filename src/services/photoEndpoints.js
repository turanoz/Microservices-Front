import {gateway} from "@/services/_api";
export default function () {
    const savePhoto = (input) => {
        const data = new FormData();
        data.append("photo", input.files[0])
        return gateway({
            method: 'post', url: 'photostock/Photos', headers: {
                'Content-Type': 'multipart/form-data'
            }, data: data
        });
    }
    const deletePhoto = (url) => {
        return gateway({
            method: 'delete', url: 'photostock/Photos', params: {
                photoUrl: url,
            }
        });
    }
    const getPhoto = (url) => {
        return "http://34.88.156.91:5012/photos/" + url;
    }
    return {
        savePhoto, deletePhoto, getPhoto
    }
}
