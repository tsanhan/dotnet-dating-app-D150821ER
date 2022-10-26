Cloudinary Account:
so lets see what we can so with Cloudinary:
1. lets go to the pricing: https://cloudinary.com/pricing
    * got free tier for free
    * no credit card required
    * lots of storage, logic and infrastructure ready to use
2. sign up for free: https://cloudinary.com/users/register/free
3. after mail verification, go to the cloudinary dashboard in https://cloudinary.com/console (top left menu option)
4. the most important thing here is the key and secret.
5. one of the things cloudinary give ues a SDK to work with from our BE
    * SDK: software development kit, a set of tools that helps us to work with cloudinary

6. we can find the SDK in the documentation ('?' icon in the top right corner), OR https://cloudinary.com/documentation

7. in the documentation, we can find the SDK in the top nav option: 'SDKs'=>'Backend SDKs'=>'.NET SDK' (https://cloudinary.com/documentation/dotnet_integration)
    * question: why not just use Angular SDK?
    * answer: we want only authenticated users to upload images, our BE is authenticating the user, the frontend is not
8. after the examples we have the 'installation' (using nuget)
    * and then the configurations (we'll need the key + secret + cloud_name there)
    * and then 'Related topics' section with 'uploading images and videos' 
    * there, we won't need the widget, we have angular for that, but the '.NET image upload' is relevant
    * we'll need to pass params that related to the file.
    * as a response (in section 'Upload response') we'll get the url of the image (in secure_url)

9. ok so we have plenty of documentation 

up next: Configuring cloudinary in the API
