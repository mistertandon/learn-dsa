from ppretty import ppretty


def print_variable_type(var):
    print(type(var))


def print_object(obj,
                 show_address=False,
                 indent='   ',
                 show_properties=True,
                 show_static=True,
                 show_protected=True,
                 seq_length=20,
                 depth=10,
                width=40):
    
    print(ppretty(obj, show_address=show_address, indent=indent,
              show_properties=show_properties, show_static=show_static, show_protected=show_protected, seq_length=seq_length, depth=depth))
    
    return True

