import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddRecipe.css";

const AddRecipeForm = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageErrors, setImageErrors] = useState([]);
  const formRef = useRef(null);

  const validateImageFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    const maxImageCount = 5;

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      return "Invalid file type. Only JPEG, PNG, and GIF are allowed.";
    }

    // Check file size
    if (file.size > maxFileSize) {
      return "File is too large. Maximum size is 5MB.";
    }

    return null;
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImageErrors = [];
    const validImages = [];

    // Reset previous errors
    setImageErrors([]);

    // Validate each file
    files.forEach((file) => {
      const error = validateImageFile(file);
      if (error) {
        newImageErrors.push(error);
      } else {
        validImages.push(file);
      }
    });

    // Check total image count
    if (selectedImages.length + validImages.length > 5) {
      newImageErrors.push("Maximum of 5 images allowed.");
    } else {
      // Create image previews for valid images
      const imagePreviews = validImages.map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => [...prevImages, ...imagePreviews]);
    }

    // Set errors if any
    if (newImageErrors.length > 0) {
      setImageErrors(newImageErrors);
    }
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check form validity
    if (formRef.current.checkValidity() === false) {
      e.stopPropagation();
      formRef.current.classList.add("was-validated");
      return;
    }

    // Additional custom validations can be added here
    console.log("Form submitted successfully");
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add a Recipe</h2>
        <p className="text-center">
          Feeling like a kitchen Picasso? We want to see your masterpiece! Add
          your recipe and show off your culinary creativity.
        </p>
        <hr />

        {/* Image Upload Errors */}
        {imageErrors.length > 0 && (
          <div className="alert alert-danger">
            {imageErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Add a photo</label>
            <div
              className="photo-upload-box text-center p-4 rounded"
              style={{
                backgroundColor: "#D7E0D8",
                border: "2px dashed gray",
                textAlign: "center",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="btn btn-outline-success"
                style={{
                  backgroundColor: "#2E5834",
                  color: "#fff",
                  border: "1px solid #2E5834",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "darkgreen";
                  e.target.style.border = "1px solid darkgreen";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#2E5834";
                  e.target.style.border = "1px solid #2E5834";
                }}
              >
                + Add a photo
              </label>
            </div>

            <div className="mt-3">
              {selectedImages.length > 0 && (
                <div className="d-flex flex-wrap">
                  {selectedImages.map((image, index) => (
                    <div
                      key={index}
                      className="position-relative m-2"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src={image}
                        alt={`Preview ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="btn-close position-absolute"
                        style={{
                          top: "5px",
                          right: "5px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                        }}
                        aria-label="Close"
                      ></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="recipeTitle" className="form-label">
              Recipe Title *
            </label>
            <input
              type="text"
              className="form-control"
              id="recipeTitle"
              placeholder="Enter your recipe title"
              required
              minLength="3"
              maxLength="100"
            />
            <div className="invalid-feedback">
              Please enter a recipe title (3-100 characters).
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description *
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              placeholder="Describe your recipe in a way that makes mouths water."
              required
              minLength="10"
              maxLength="500"
            ></textarea>
            <div className="invalid-feedback">
              Please provide a description (10-500 characters).
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div className="col mb-3">
            <div className="col-md-4 mb-4">
              <label htmlFor="servings" className="form-label">
                Servings *
              </label>
              <input
                type="number"
                className="form-control"
                id="servings"
                placeholder="e.g., 4"
                required
                min="1"
                max="20"
              />
              <div className="invalid-feedback">
                Please enter servings (1-20).
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <label htmlFor="prepTime" className="form-label">
                Prep Time *
              </label>
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control me-2"
                  id="prepTimeHours"
                  placeholder="hrs"
                  required
                  min="0"
                  max="24"
                />
                <input
                  type="number"
                  className="form-control"
                  id="prepTimeMinutes"
                  placeholder="mins"
                  required
                  min="0"
                  max="59"
                />
                <div className="invalid-feedback">
                  Please enter valid prep time.
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <label htmlFor="cookTime" className="form-label">
                Cook Time *
              </label>
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control me-2"
                  id="cookTimeHours"
                  placeholder="hrs"
                  required
                  min="0"
                  max="24"
                />
                <input
                  type="number"
                  className="form-control"
                  id="cookTimeMinutes"
                  placeholder="mins"
                  required
                  min="0"
                  max="59"
                />
                <div className="invalid-feedback">
                  Please enter valid cook time.
                </div>
              </div>
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="mb-3">
            <label className="form-label">Ingredients *</label>
            <div className="ingredient-list">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <input
                    type="number"
                    className="form-control me-2"
                    placeholder="Qty"
                    required
                    min="0.1"
                    step="0.1"
                  />
                  <select className="form-select me-2" required>
                    <option value="">Measurement</option>
                    <option value="cups">Cups</option>
                    <option value="tbsp">Tbsp</option>
                    <option value="tsp">Tsp</option>
                  </select>
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Item"
                    required
                    minLength="2"
                    maxLength="50"
                  />
                  <button
                    type="button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "32px",
                      height: "25px",
                      borderRadius: "50%",
                      color: "black",
                      border: "1px solid rgb(0, 0, 0)",
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "inline-block",
                fontWeight: "bold",
                color: "black",
                cursor: "pointer",
                padding: "8px 0px",
                textAlign: "center",
              }}
            >
              + Add ingredient
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="mb-3">
            <label className="form-label">Instructions *</label>
            <div className="instruction-list">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="mb-3">
                  <label className="form-label">Step {index + 1}</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    required
                    minLength="10"
                    maxLength="500"
                  ></textarea>
                  <div className="invalid-feedback">
                    Please describe the step (10-500 characters).
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "inline-block",
                fontWeight: "bold",
                color: "black",
                cursor: "pointer",
                padding: "8px 0px",
                textAlign: "center",
              }}
            >
              + Add step
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="mb-3">
            <label htmlFor="cooksTips" className="form-label">
              Cook's Tips
            </label>
            <textarea
              className="form-control"
              id="cooksTips"
              rows="5"
              placeholder="Share your kitchen secrets! Oven hacks, swaps, or any tips for ultimate recipe success."
              maxLength="500"
            ></textarea>
          </div>

          <br />
          <hr />
          <br />

          <div className="col mb-3">
            <div className="col mb-5">
              <label className="form-label">Cuisine</label>
              <select className="form-select">
                <option value="">Select Cuisine</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>
            <div className="col mb-5">
              <label className="form-label">Meal Type</label>
              <select className="form-select">
                <option value="">Select Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
              </select>
            </div>
            <div className="col mb-5">
              <label className="form-label">Dietary Restrictions</label>
              <select className="form-select">
                <option value="">Select Restrictions</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
              </select>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-success"
              style={{
                color: "#2E5834",
                border: "1px solid #2E5834",
                margin: "0 10px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "darkgreen";
                e.target.style.border = "1px solid darkgreen";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.border = "1px solid #2E5834";
                e.target.style.color = "#2E5834";
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-success"
              style={{
                backgroundColor: "#2E5834",
                color: "#fff",
                border: "1px solid #2E5834",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "darkgreen";
                e.target.style.border = "1px solid darkgreen";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#2E5834";
                e.target.style.border = "1px solid #2E5834";
              }}
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
