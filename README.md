# TinyMCE Hello World Demo

## Getting Started

Follow these steps to set up and run the TinyMCE Hello World demo on your local machine.

### Step 1: Install Dependencies

First, install the necessary dependencies by running the following command in your project directory:

```bash
npm install
```

This will download the `http-server` package, which will help us run TinyMCE.

### Step 2: Start the Server

Next, start the server by running:

```bash
http-server
```

### Step 3: Open the App in Your Browser

Open your browser and navigate to [http://localhost:8080](http://localhost:8080/). Your app should be running, and you should see a page similar to the one below:

![TinyMCE Demo](https://github.com/mrinasugosh/tiny-demo/assets/25342475/4782180d-4fc6-43c7-abbe-da94463211fd)

### Step 4: Configure TinyMCE

Now that your app is running, you need to configure TinyMCE. Open the `index.html` file in your project directory and add your TinyMCE Cloud API key to get started with the editor.

Here's an example of how to include your API key in the `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tiny.cloud/1/your-api-key/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
  <script>
    tinymce.init({
      selector: 'textarea'
    });
  </script>
</head>
<body>
  <textarea>Your content here...</textarea>
</body>
</html>
```

Replace `your-api-key` with your actual TinyMCE Cloud API key.

### Conclusion

That's it! You now have a basic TinyMCE setup running on your local machine. You can start experimenting with the editor and customize it further based on your needs. For more information and advanced configurations, refer to the [TinyMCE documentation](https://www.tiny.cloud/docs/).
