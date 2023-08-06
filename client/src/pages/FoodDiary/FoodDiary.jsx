import React from "react";
import "../FoodDiary/FoodDiary.scss";

export const FoodDiary = () => {
    return (
        <>
            <div className="foodDiary_container__header">
                <h1>
                    Get Your Daily Calories Under Control 💪
                </h1>
            </div>
            <div className="foodDiary_container__section">
                <div className="foodDiary_container__food">
                    <div>
                        <p>Breakfast</p>
                    </div>
                    <div>
                        <button>
                            Add Food
                        </button>
                    </div>
                </div>
                <div className="foodDiary_container__food">
                    <div>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <button>
                            Add Food
                        </button>
                    </div>
                </div>
                <div className="foodDiary_container__food">
                    <div>
                        <p>Dinner</p>
                    </div>
                    <div>
                        <button>
                            Add Food
                        </button>
                    </div>
                </div>
                <div className="foodDiary_container__food">
                    <div>
                        <p>Snacks</p>
                    </div>
                    <div>
                        <button>
                            Add Food
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};