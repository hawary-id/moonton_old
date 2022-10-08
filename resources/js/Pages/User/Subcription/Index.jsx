import SubcriptionCard from "@/Components/SubcriptionCard";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
export default function SubcriptionPlan({ auth, subcriptionPlans, env }) {
    const selectSubcription = (id) => {
        Inertia.post(
            route("user.dashboard.subcriptionPlan.userSubcribe", {
                subcriptionPlan: id,
            }),
            {},
            {
                only: ["userSubcription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubcription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubcription) => {
        snap.pay(userSubcription.snap_token, {
            // Optional
            onSuccess: function (result) {
                Inertia.visit(route("user.dashboard.index"));
            },
            // Optional
            onPending: function (result) {
                console.log({ result });
            },
            // Optional
            onError: function (result) {
                console.log({ result });
            },
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Subcription Plan">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
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
