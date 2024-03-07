import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo";
import { Avatar, CardContent, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import BlankCard from "@/app/(WebsiteLayout)/components/shared/BlankCard";

const RegisterTypeDialog = ({ isText = false, isBtn = false }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isBtn && (
        <Button
          color="primary"
          variant="outlined"
          startIcon={<AccountCircleTwoToneIcon />}
          onClick={handleClickOpen}
        >
          Register
        </Button>
      )}

      {isText && (
        <div className="cursor-pointer" onClick={handleClickOpen}>
          <Typography
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Create an account
          </Typography>
        </div>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div className="mx-2">
    
            <div className="flex items-center justify-center mt-4">
              <Logo />
            </div>
            <Typography fontSize={{ lg: 16, xs: 13 }} textAlign="center" mb={8}>
            Choose your preferred sign up method
            </Typography>

            <div className="flex gap-4 items-center mt-8">
              <BlankCard
                sx={{
                  boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Image
                  src="/images/backgrounds/top-info-shape.png"
                  alt="img"
                  className="top-img"
                  width={59}
                  height={81}
                />
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.main",
                      width: 50,
                      height: 50,
                      borderRadius: "18px",
                    }}
                  >
                    <Icon icon="heroicons:user" />
                  </Avatar>
                  <Typography variant="h5" mt={3}>
                    Citizen
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" mt={1}>
                    Register now to access exclusive features and personalized
                    content.
                  </Typography>
                  <div className="flex items-center justify-end mt-2">
                    <Link href="/register/user">
                      <Button
                        color={"primary"}
                        variant="contained"
                        sx={{
                          marginTop: 2,
                          borderRadius: "10px",
                        }}
                        endIcon={<KeyboardArrowRightIcon />}
                      >
                        Proceed
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </BlankCard>
              <BlankCard
                sx={{
                  boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Image
                  src="/images/backgrounds/top-info-shape.png"
                  alt="img"
                  className="top-img"
                  width={59}
                  height={81}
                />
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.main",
                      width: 50,
                      height: 50,
                      borderRadius: "18px",
                    }}
                  >
                    <Icon icon="heroicons:rectangle-group" />
                  </Avatar>
                  <Typography variant="h5" mt={3}>
                    Collector
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" mt={1}>
                    Register now to discover, collect, and manage your
                    personalized collections.
                  </Typography>
                  <div className="flex items-center justify-end mt-2">
                    <Link href="/register/collector">
                      <Button
                        color={"primary"}
                        variant="contained"
                        sx={{
                          marginTop: 2,
                          borderRadius: "10px",
                        }}
                        endIcon={<KeyboardArrowRightIcon />}
                      >
                        Proceed
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </BlankCard>
            </div>
            <div className="flex items-center justify-center mt-4">
              <BlankCard
                sx={{
                  boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Image
                  src="/images/backgrounds/top-info-shape.png"
                  alt="img"
                  className="top-img"
                  width={59}
                  height={81}
                />
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.main",
                      width: 50,
                      height: 50,
                      borderRadius: "18px",
                    }}
                  >
                    <Icon icon="heroicons:building-office-2" />
                  </Avatar>
                  <Typography variant="h5" mt={3}>
                    Company
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" mt={1}>
                    Register your business for exclusive access to our
                    platform&ldquo;s features.
                  </Typography>
                  <div className="flex items-center justify-end mt-2">
                    <Link href="/register/enterprise">
                      <Button
                        color={"primary"}
                        variant="contained"
                        sx={{
                          marginTop: 2,
                          borderRadius: "10px",
                        }}
                        endIcon={<KeyboardArrowRightIcon />}
                      >
                        Proceed
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </BlankCard>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterTypeDialog;
