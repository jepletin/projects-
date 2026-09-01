#kwargs and printing out when a function was called

def log_deco(func):
    def wrapper(*args, **kwargs):
        print("------------------------------------------------------------------")
        print("Args ", args)
        print("Krwargs ", kwargs)
        result = func(*args, **kwargs)
        print(f"the function called was {func._name_}")
        print("results ", result)
        print("------------------------------------------------------------------")
    return wrapper


@log_deco
def hello():
    print("Hello world")
    return 123


@log_deco
def sum(a, b):
    ans = a + b
    return ans


sum(a=20, b=30)  # kwargs

sum(1, 5)  # args