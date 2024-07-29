function ImageHelpers() {
    const resolveImage = (url: string) => {
        const remoteServerUrl =
            process.env.BASE_API_URL || 'http://localhost:1337';
        return `${remoteServerUrl}${url}`;
    };

    return {
        resolveImage,
    };
}

export default ImageHelpers();
