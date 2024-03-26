def walk(steps):
    if steps == 1:
        return 1
    # print(f"You have {steps - 1} left")
    walk(steps - 1)
    print(f"You have walked {steps}")

walk(100)
