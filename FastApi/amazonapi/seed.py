from db import prisma


PENDING_STATUS={
        "id": "00000000-0000-0000-0000-000000000001",
        "name": "Pending",
        "description": "Order payment is pending.",
        "icon_name": "clock",
        "badge_color": "yellow"
}

PAID_STATUS={
        "id": "00000000-0000-0000-0000-000000000002",
        "name": "Paid",
        "description": "Order payment has been completed successfully.",
        "icon_name": "check-circle",
        "badge_color": "green"
}

status = [
    PENDING_STATUS,PAID_STATUS
]

async def seed_status():

    for single_status in status:
        seed_status =await prisma.client_order_status.upsert(
            where={
                "id":single_status["id"]
            },
            data={
                "create":single_status,
                "update":{
                    "name":single_status["name"],
                    "description":single_status["description"],
                    "icon_name":single_status["icon_name"],
                    "badge_color":single_status["badge_color"]
                }
            }
         )


        #print("seed status",seed_status)