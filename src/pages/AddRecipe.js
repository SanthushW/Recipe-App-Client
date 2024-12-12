import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddRecipeForm = () => {
  return (
    <div className="container my-5">
      <div className="card">
        <h2 className="text-center mb-4">Add a Recipe</h2>
        <p className="text-center">
          Feeling like a kitchen Picasso? We want to see your masterpiece! Add
          your recipe and show off your culinary creativity.
        </p>
        <hr />
        <form>
          <div className="mb-3">
            <label className="form-label">Add a Photo</label>
            <div className="photo-upload-box">
              <button type="button" className="btn btn-outline-success">
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
          <hr />

          <div className="mb-3">
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="prepTime" className="form-label">
                Prep Time *
              </label>
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
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
            <div className="mb-4">
              <label htmlFor="cookTime" className="form-label">
                Cook Time *
              </label>
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
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

          <hr />

          <div className="mb-3">
            <label className="form-label">Ingredients *</label>
            <div className="ingredient-list">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="d-flex mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Qty"
                    required
                  />
                  <select className="form-select" required>
                    <option value="">Measurement</option>
                    <option value="cups">Cups</option>
                    <option value="tbsp">Tbsp</option>
                    <option value="tsp">Tsp</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Item"
                    required
                  />
                  <button type="button">&times;</button>
                </div>
              ))}
            </div>
            <div>+ Add ingredient</div>
          </div>
          <hr />

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
            <div>+ Add step</div>
          </div>
          <hr />

          <div className="mb-3">
            <label htmlFor="cooksTips" className="form-label">
              Cook's Tips
            </label>
            <textarea
              className="form-control"
              id="cooksTips"
              rows="5"
              placeholder="Share your kitchen secrets!"
            ></textarea>
          </div>
          <hr />

          <div className="mb-3">
            <label className="form-label">Cuisine</label>
            <select className="form-select">
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Meal Type</label>
            <select className="form-select">
              <option value="">Select Meal Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Dietary Restrictions</label>
            <select className="form-select">
              <option value="">Select Restrictions</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </select>
          </div>

          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-outline-success">
              Cancel
            </button>
            <button type="submit" className="btn btn-outline-success">
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
