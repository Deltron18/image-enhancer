import axios from "axios";
const APIKEY = 'wx1wbo60s8i0u6d2a'
const BASEURL = "https://techhk.aoscdn.com/";


export const enhanchedImageAPI = async (file) => {

  try {
    const taskId = await uploadimage(file);
    console.log("image upload succesfully,task Id:", taskId);

    const enhancedimagedata = await pollforenhancedimage(taskId);
    console.log("enhanced image data:", enhancedimagedata);

    return enhancedimagedata;
  }
  catch (error) {
    console.log("error enhancing image:", error.message);
  }
};

const uploadimage = async (file) => {

  //code to upload a image
  ///api/tasks/visual/scale --post
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${BASEURL}/api/tasks/visual/scale`, formData, {
    headers: {
      "content-type": "multipart/form-data",
      "X-API-KEY": APIKEY,
    },
  });
  if (!data?.data?.task_id) {
    throw new Error("failed to upload image! task ID not found.");
  }
  return data.data.task_id;
};
const pollforenhancedimage = async (taskId, retries = 0) => {
  const result = await fetchenhancedimage(taskId);
  if (result.state == 4) {
    console.log("processing....");
    if (retries >= 20) {
      throw new error("max retries reached, please try again later");
    }
    //  wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollforenhancedimage(taskId, retries + 1);
  }
  console.log("enhanced image URL:", result);
  return result;
};

const fetchenhancedimage = async (taskId) => {
  //code to get enhanced image
  ///api/tasks/visual/scale/{task_id} --get

  const { data } = await axios.get(`${BASEURL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
      "X-API-KEY": APIKEY,
    },
  });
  if (!data?.data) {
    throw new Error("failed to fetch enhanced image! image not found.");
  }
  return data.data;
};


//cdbfd4be-2d4a-4e56-9df8-9e28f7f5df5f