import React from "react";
import { useForm } from "react-hook-form";
import { IUserAddProps } from "../../models/IUserAddProps";
import { joiResolver } from "@hookform/resolvers/joi";
import styles from "./NewUserForm.module.css";
import { placeHolderApi } from "../../services/usersPostsComments.api.service";
import User from "../../components/LastInChain/User/User";
import { IUserProps } from "../../models/IUserProps";
import { userValidator } from "../../validators/user.validator";

const NewUserForm = () => {
  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserAddProps>({
    mode: "all",
    resolver: joiResolver(userValidator),
  });
  const [userResponse, setUserResponse] = React.useState<IUserProps | null>(
    null,
  );

  const handleSubmitCallback = (e: IUserAddProps) => {
    placeHolderApi.addUser(e).then(({ data }) => data && setUserResponse(data));
  };
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit(handleSubmitCallback)}
        className={styles.form}
      >
        <label>
          User name and surname: <input type="text" {...register("name")} />
          {errors.name && <p> {errors.name.message}</p>}
        </label>

        <label>
          Username: <input type="text" {...register("username")} />
          {errors.username && <p> {errors.username.message}</p>}
        </label>
        <label>
          User email: <input type="text" {...register("email")} />
          {errors.email && <p> {errors.email.message}</p>}
        </label>
        <label>
          Address:
          <label>
            Street:
            <input type="text" {...register("address.street")} />
            {errors.address?.street && <p> {errors.address.street.message}</p>}
          </label>
          <label>
            Suite: <input type="text" {...register("address.suite")} />
            {errors.address?.suite && <p> {errors.address.suite.message}</p>}
          </label>
          <label>
            City: <input type="text" {...register("address.city")} />
            {errors.address?.city && <p> {errors.address.city.message}</p>}
          </label>
          <label>
            Zipcode: <input type="text" {...register("address.zipcode")} />
            {errors.address?.zipcode && (
              <p> {errors.address.zipcode.message}</p>
            )}
          </label>
          <label>
            Geo:
            <label>
              Latitude: <input type="text" {...register("address.geo.lat")} />
              {errors.address?.geo?.lat && (
                <p> {errors.address?.geo?.lat.message}</p>
              )}
            </label>
            <label>
              Longitude: <input type="text" {...register("address.geo.lng")} />
              {errors.address?.geo?.lng && (
                <p> {errors.address?.geo?.lng.message}</p>
              )}
            </label>
          </label>
        </label>
        <button disabled={!isValid}>Submit</button>
      </form>
      {userResponse && <User user={userResponse} />}
    </div>
  );
};

export default NewUserForm;
