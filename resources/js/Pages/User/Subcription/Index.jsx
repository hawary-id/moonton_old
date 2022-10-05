import SubcriptionCard from "@/Components/SubcriptionCard";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
export default function SubcriptionPlan({ auth, subcriptionPlans }) {
    const selectSubcription = (id) => {
        Inertia.post(
            route("user.dashboard.subcriptionPlan.userSubcribe", {
                subcriptionPlan: id,
            })
        );
    };
    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    {subcriptionPlans.map((subcriptionPlan) => (
                        <SubcriptionCard
                            name={subcriptionPlan.name}
                            price={subcriptionPlan.price}
                            durationInMonth={
                                subcriptionPlan.active_period_in_months
                            }
                            features={JSON.parse(subcriptionPlan.features)}
                            isPremium={subcriptionPlan.name === "Premium"}
                            key={subcriptionPlan.id}
                            onSelectionSubcription={() =>
                                selectSubcription(subcriptionPlan.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
