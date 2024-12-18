import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddRecipe.css";
import { Toast } from "bootstrap";

const AddRecipeForm = () => {
  const [errors, setErrors] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toastRefs = useRef([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((error, index) => {
        const toastElement = toastRefs.current[index];
        if (toastElement) {
          const toast = new Toast(toastElement);
          toast.show();
        }
      });
    }
  }, [errors]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => [...prev, "Invalid file type. Please upload JPEG, PNG, or GIF."]);
        return;
      }

      if (file.size > maxSize) {
        setErrors(prev => [...prev, "File is too large. Maximum size is 5MB."]);
        return;
      }

      setImageFile(file);
    }
  };

  const validateForm = async (event) => {
    event.preventDefault();
    const newErrors = [];
  
    // Validate Recipe Title
    const recipeTitle = document.getElementById("recipeTitle").value.trim();
    if (!recipeTitle) newErrors.push("Recipe title is required.");
  
    // Validate Description
    const description = document.getElementById("description").value.trim();
    if (!description) newErrors.push("Description is required.");
  
    // Validate Servings
    const servings = document.getElementById("servings").value.trim();
    if (!servings || Number(servings) <= 0)
      newErrors.push("Servings must be a positive number.");
  
    // Validate Prep Time
    const prepTimeHours = document.getElementById("prepTimeHours").value.trim();
    const prepTimeMinutes = document.getElementById("prepTimeMinutes").value.trim();
    if (!prepTimeHours && !prepTimeMinutes)
      newErrors.push("Preparation time is required.");
  
    // Validate Cook Time
    const cookTimeHours = document.getElementById("cookTimeHours").value.trim();
    const cookTimeMinutes = document.getElementById("cookTimeMinutes").value.trim();
    if (!cookTimeHours && !cookTimeMinutes)
      newErrors.push("Cooking time is required.");

    // Validate Ingredients
    const ingredientRows = document.querySelectorAll('.ingredient-list > div');
    const ingredients = [];
    ingredientRows.forEach(row => {
      const quantity = row.querySelector('input[placeholder="Qty"]').value.trim();
      const measurement = row.querySelector('select').value;
      const item = row.querySelector('input[placeholder="Item"]').value.trim();

      if (!quantity || !measurement || !item) {
        newErrors.push("All ingredient fields must be filled.");
      } else {
        ingredients.push({ quantity, measurement, item });
      }
    });

    // Validate Instructions
    const instructionRows = document.querySelectorAll('.instruction-list > div');
    const instructions = [];
    instructionRows.forEach((row, index) => {
      const step = row.querySelector('textarea').value.trim();
      if (!step) {
        newErrors.push(`Step ${index + 1} is required.`);
      } else {
        instructions.push(step);
      }
    });
  
    // Update error state
    setErrors(newErrors);
  
    if (newErrors.length === 0) {
      try {
        setIsSubmitting(true);
        
        // Prepare form data
        const formData = new FormData();
        
        // Add image if exists
        if (imageFile) {
          formData.append('image', imageFile);
        }

        // Add other recipe details
        formData.append('title', recipeTitle);
        formData.append('description', description);
        formData.append('servings', servings);
        formData.append('prepTimeHours', prepTimeHours || 0);
        formData.append('prepTimeMinutes', prepTimeMinutes || 0);
        formData.append('cookTimeHours', cookTimeHours || 0);
        formData.append('cookTimeMinutes', cookTimeMinutes || 0);
        formData.append('ingredients', JSON.stringify(ingredients));
        formData.append('instructions', JSON.stringify(instructions));
        formData.append('cooksTips', document.getElementById("cooksTips").value.trim());
        formData.append('cuisine', document.querySelector('select[aria-label="Cuisine"]').value);
        formData.append('mealType', document.querySelector('select[aria-label="Meal Type"]').value);
        formData.append('dietaryRestrictions', document.querySelector('select[aria-label="Dietary Restrictions"]').value);

        // API Call
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          body: formData,
          // Include headers if needed, e.g., for authorization
          // headers: {
          //   'Authorization': `Bearer ${yourAuthToken}`
          // }
        });

        if (!response.ok) {
          throw new Error('Recipe submission failed');
        }

        const result = await response.json();
        
        // Reset form
        event.target.reset();
        setImageFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        
        // Show success toast
        const successToast = new Toast(document.getElementById('successToast'));
        successToast.show();
      } catch (error) {
        console.error("Error submitting recipe:", error);
        setErrors(prev => [...prev, "Failed to submit recipe. Please try again."]);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add a Recipe</h2>
        <p className="text-center">
          Feeling like a kitchen Picasso? We want to see your masterpiece! Add
          your recipe and show off your culinary creativity.
        </p>
        <hr></hr>
        <form>
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
              <button
                type="button"
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
                + Add a photo
              </button>
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
            />
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
            ></textarea>
          </div>
          <br />
          <hr></hr>
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
              />
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
                />
                <input
                  type="number"
                  className="form-control"
                  id="prepTimeMinutes"
                  placeholder="mins"
                  required
                />
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
                />
                <input
                  type="number"
                  className="form-control"
                  id="cookTimeMinutes"
                  placeholder="mins"
                  required
                />
              </div>
            </div>
          </div>

          <br />
          <hr></hr>
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
                      border: "none",
                      cursor: "pointer",
                      border: "1px solid rgb(0, 0, 0)",
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
          <hr></hr>
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
                  ></textarea>
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
          <hr></hr>
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
            ></textarea>
          </div>

          <br />
          <hr></hr>
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
              onClick={validateForm}
              className="btn btn-outline-success"
              id="btn-submit"
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

      {/* Toast Notifications for Errors */}
      <div className="toast-container position-fixed top-0 end-0 p-3">
        {errors.map((error, index) => (
          <div
            key={index}
            className="toast align-items-center text-bg-danger border-0 mb-2"
            ref={(el) => (toastRefs.current[index] = el)}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">{error}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                aria-label="Close"
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRecipeForm;
